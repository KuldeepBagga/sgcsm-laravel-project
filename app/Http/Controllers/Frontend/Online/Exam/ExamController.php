<?php

namespace App\Http\Controllers\Frontend\Online\Exam;

use App\Http\Controllers\Controller;
use App\Models\AssignExam;
use App\Models\ExamRegistration;
use App\Models\OnlineExamResult;
use App\Models\QuestionAnswer;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ExamController extends Controller
{
    public function register(Request $request)
    {
        $user = Auth::user();
        abort_if(!$user->role('student'), 404);
        $user_data = Student::with('institute', 'course')->where('student_id', $user->id)->first();
        $exam_register = ExamRegistration::where('user_id', $user->id)->first();

        return Inertia::render('Frontend/Online/Exam/Register', compact('user_data', 'exam_register'));
    }

    public function register_post(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id|unique:exam_registrations,user_id',
        ], [
            'user_id.required' => 'User is not valid.',
            'user_id.exists' => 'The selected user does not exist.',
            'user_id.unique' => 'This user has already registered for the exam.',
        ]);

        if (!Auth::user()->hasRole('student')) {
            return redirect()->route('admin.online.exam.regsiter')->with('error', 'You are not a valid user. only student can apply for exam.');
        }

        ExamRegistration::create([
            'user_id' => $validated['user_id']
        ]);

        return redirect()->route('admin.online.exam.regsiter')->with('success', 'Your registration accepted thankyou!');
    }

    public function start_exam()
    {
        abort_if(!Auth::user()->hasRole('student'), 404);
        $user = Auth::user();
        $assign_exam = AssignExam::with(['student', 'exam', 'questions.answers'])->where('user_id', $user->id)->first();

        if (empty($assign_exam->status)) {
            return redirect()->route('admin.dashboard')->with('error', 'something went wrong!');
        }

        if ($assign_exam->status === "COMPLETED") {
            return redirect()->route('admin.online-exam-result.show');
        }

        if ($assign_exam->status === "BLOCKED") {
            return redirect()->route('admin.dashboard')->with('error', 'Nothing found!');
        }

        return Inertia::render('Frontend/Online/Exam/ExamStart', compact('assign_exam'));
    }

    public function submit_exam(Request $request)
    {
        abort_if(!Auth::user()->hasRole('student'), 404);
        $validated = $request->validate([
            'exam_id' => 'required',
            'question_count' => 'required',
            'correct_answer_count' => 'required',
            'user_id' => 'required'
        ]);

        OnlineExamResult::create($validated);
        $assign_exam = AssignExam::where('user_id', $validated['user_id'])
            ->where('exam_id', $validated['exam_id'])
            ->first();

        if ($assign_exam) {
            $assign_exam->update([
                'status' => 'COMPLETED',
            ]);
        }

        return redirect()->route('admin.online-exam-result.show')->with('success', 'Your exam submitted successfully!');
    }

    public function online_exam_result_show()
    {
        $user = Auth::user();
        $exam_result = OnlineExamResult::with(['student.course', 'institute'])->where('user_id', $user->id)->first();
        return Inertia::render('Frontend/Online/Result/Show', compact('exam_result'));
    }
}
