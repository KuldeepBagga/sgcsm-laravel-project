<?php

namespace App\Http\Controllers\Admin\Online\Exam;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Online\Exam\ExamCourseRequest;
use App\Models\ExamCourse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class ExamCourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Gate::authorize('viewAny', ExamCourse::class);
        $exam = ExamCourse::latest()->paginate(50);
        return Inertia::render('Admin/Online/Exam/Course/List', compact('exam'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', ExamCourse::class);
        return Inertia::render('Admin/Online/Exam/Course/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ExamCourseRequest $request)
    {
        Gate::authorize('create', ExamCourse::class);
        $validated = $request->validated();
        ExamCourse::create($validated);
        return redirect()->route('admin.online-exam.course.index')->with('success', 'Exam Created Successfully.');
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
    public function edit(ExamCourse $exam)
    {
        Gate::authorize('update', $exam);
        return Inertia::render('Admin/Online/Exam/Course/Form', compact('exam'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ExamCourseRequest $request, ExamCourse $exam)
    {
        Gate::authorize('update', $exam);
        $validated = $request->validated();
        $exam->update($validated);
        return redirect()->route('admin.online-exam.course.index')->with('success', 'Exam updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ExamCourse $exam)
    {
        Gate::authorize('delete', $exam);
        $exam->delete();
        return redirect()->route('admin.online-exam.course.index')->with('success', 'Exam deleted successfully.');
    }
}
