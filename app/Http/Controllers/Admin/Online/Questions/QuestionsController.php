<?php

namespace App\Http\Controllers\Admin\Online\Questions;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Online\Bulk\BulkUploadRequest;
use App\Http\Requests\Admin\Online\Question\QuestionRequest;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Spatie\SimpleExcel\SimpleExcelReader;

class QuestionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        Gate::authorize('online-exam-questions.view', Question::class);
        $exam_id = $request->exam_id;
        abort_if(!$exam_id, 404);
        $question = Question::with('answers')->where('exam_id', $request->exam_id)->latest()->paginate(50);

        return Inertia::render('Admin/Online/Exam/Questions/List', compact('exam_id', 'question'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        Gate::authorize('online-exam-questions.create', Question::class);
        $exam_id = $request->exam_id;
        abort_if(!$exam_id, 404);
        return Inertia::render('Admin/Online/Exam/Questions/Form', compact('exam_id'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(QuestionRequest $request)
    {
        Gate::authorize('online-exam-questions.create', Question::class);
        $validated = $request->validated();
        abort_if(!$validated['exam_id'], 404);
        $question = Question::create([
            'question' => $validated['question'],
            'exam_id'  => $validated['exam_id'],
        ]);

        foreach ($validated['modules'] as $module) {
            $question->answers()->create([
                'answer' => $module['answer'],
                'correct_answer' => $module['correct_answer'],
            ]);
        }

        return redirect()->route('admin.online-exam-questions.index', ['exam_id' => $validated['exam_id']])->with('success', 'Question created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Question $question, Request $request)
    {
        Gate::authorize('online-exam-questions.update', $question);
        $exam_id = $request->exam_id;
        abort_if(!$exam_id, 404);
        $question = $question->load('answers');
        return Inertia::render('Admin/Online/Exam/Questions/Form', compact('exam_id', 'question'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(QuestionRequest $request, Question $question)
    {
        Gate::authorize('online-exam-questions.update', $question);
        $validated = $request->validated();
        abort_if(!$validated['exam_id'], 404);
        DB::transaction(function () use ($question, $validated) {

            $question->update([
                'question' => $validated['question'],
                'exam_id'  => $validated['exam_id'],
            ]);

            $question->answers()->delete();

            foreach ($validated['modules'] as $module) {
                $question->answers()->create([
                    'answer' => $module['answer'],
                    'correct_answer' => $module['correct_answer'],
                ]);
            }
        });

        return redirect()
            ->route('admin.online-exam-questions.index', ['exam_id' => $request->exam_id])
            ->with('success', 'Question updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Question $question)
    {
        Gate::authorize('online-exam-questions.delete', $question);
        $question->delete();
        return redirect()
            ->route('admin.online-exam-questions.index', ['exam_id' => $question->exam_id])
            ->with('success', 'Question deleted successfully.');
    }

    public function bulk_upload(Request $request)
    {
        $exam_id = $request->exam_id;
        return Inertia::render('Admin/Online/Bulk/Form', compact('exam_id'));
    }

    public function bulk_upload_post(BulkUploadRequest $request)
    {
        Gate::authorize('online-exam-questions.create', Question::class);
        $validated = $request->validated();
        $path = $request->file('file')->store('imports');
        $rows = SimpleExcelReader::create(Storage::path($path))->getRows();

        DB::transaction(function () use ($rows, $validated) {
            foreach ($rows as $row) {
                $question = Question::create([
                    'exam_id'  => $validated['exam_id'],
                    'question' => $row['question'],
                ]);

                foreach ($row as $key => $value) {
                    if (str_starts_with($key, 'option_') && !empty($value)) {
                        $question->answers()->create([
                            'answer' => trim($value),
                            'correct_answer' => trim($value) === trim($row['correct_answer']),
                        ]);
                    }
                }
            }
        });

        return redirect()->route('admin.online-exam-questions.index', ['exam_id' => $validated['exam_id']])->with('success', 'Questions imported successfully.');
    }
}
