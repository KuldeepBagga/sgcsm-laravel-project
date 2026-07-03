<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CourseModuleRequest;
use App\Models\CourseModule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class CourseModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        Gate::authorize('viewAny', CourseModule::class);
        abort_if(!$request->id, 404);
        $modules = CourseModule::where('course_id', $request->id)->latest()->paginate(50);
        return Inertia::render('Admin/Course/Module/List', [
            'course_id' => $request->id,
            'module' => $modules
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        Gate::authorize('create', CourseModule::class);
        abort_if(!$request->id, 404);
        return Inertia::render('Admin/Course/Module/Form', [
            'course_id' => $request->id
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CourseModuleRequest $course_module_request)
    {
        Gate::authorize('create', CourseModule::class);
        $validated = $course_module_request->validated();
        CourseModule::create($validated);
        return redirect()->route('admin.course-module.index', ['id' => $validated['course_id']])->with('success', 'Course module added successfully');
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
    public function edit(CourseModule $course_module)
    {
        Gate::authorize('update', $course_module);
        return Inertia::render('Admin/Course/Module/Form', [
            'module' => $course_module
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CourseModuleRequest $request, CourseModule $course_module)
    {
        Gate::authorize('update', $course_module);
        $validated = $request->validated();
        $course_module->update($validated);
        return redirect()->route('admin.course-module.index', ['id' => $validated['course_id']])->with('success', 'Course module updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CourseModule $course_module)
    {
        Gate::authorize('delete', $course_module);
        $course_module->delete();
        return redirect()->route('admin.course-module.index', ['id' => $course_module->course_id])->with('success', 'Course module updated successfully!');
    }
}
