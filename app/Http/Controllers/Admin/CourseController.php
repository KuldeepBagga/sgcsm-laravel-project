<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CourseRequest;
use App\Models\Admin\Course;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Gate::authorize('viewAny', Course::class);
        $course = Course::paginate(50);
        return Inertia::render('Admin/Course/List', compact('course'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', Course::class);
        return Inertia::render('Admin/Course/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CourseRequest $request)
    {
        Gate::authorize('create', Course::class);
        $valiated = $request->validated();
        Course::create($valiated);

        return redirect(route('course.index'))->with('success', 'Course successfully created!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        Gate::authorize('update', $course);
        return Inertia::render('Admin/Course/Form', compact('course'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CourseRequest $request, Course $course)
    {
        Gate::authorize('update', $course);
        $validated = $request->validated();
        $course->update($validated);
        return redirect(route('course.index'))->with('success', 'Course successfully updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        Gate::authorize('delete', $course);
        $course->delete();
        return redirect(route('course.index'))->with('success', 'Course successfully deleted!');
    }
}
