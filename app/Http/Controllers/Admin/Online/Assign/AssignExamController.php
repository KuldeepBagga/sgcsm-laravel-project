<?php

namespace App\Http\Controllers\Admin\Online\Assign;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Online\Assign\AssignExamRequest;
use App\Models\AssignExam;
use App\Models\ExamCourse;
use App\Models\ExamRegistration;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AssignExamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $assign_exam = AssignExam::with('user')->with('exam')->with('student')->latest()->paginate(50);
        return Inertia::render('Admin/Online/Exam/Assign/List', compact('assign_exam'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $exam_user = ExamRegistration::with('user')->with('student')->latest()->get();
        $exam = ExamCourse::latest()->get();
        return Inertia::render('Admin/Online/Exam/Assign/Form', compact('exam_user', 'exam'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AssignExamRequest $request)
    {
        $validated = $request->validated();
        AssignExam::create($validated);
        return redirect()->route('admin.online-exam-assign.index')->with('success', 'Exam assigned to student successfully.');
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
    public function edit(AssignExam $assign_exam)
    {
        $exam_user = ExamRegistration::with('user')->with('student')->latest()->get();
        $exam = ExamCourse::latest()->get();
        return Inertia::render('Admin/Online/Exam/Assign/Form', compact('exam_user', 'exam', 'assign_exam'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AssignExamRequest $request, AssignExam $assign_exam)
    {
        $validated = $request->validated();
        $assign_exam->update($validated);
        return redirect()->route('admin.online-exam-assign.index')->with('success', 'Updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AssignExam $assign_exam)
    {
        $assign_exam->delete();
        return redirect()->route('admin.online-exam-assign.index')->with('success', 'Deleted successfully.');
    }
}
