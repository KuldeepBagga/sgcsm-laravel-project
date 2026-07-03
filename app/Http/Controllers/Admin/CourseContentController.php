<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CourseContentRequest;
use App\Models\CourseContent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class CourseContentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        Gate::authorize('viewAny', CourseContent::class);
        $module_id = $request->module_id;
        $course_id = $request->course_id;
        abort_unless($module_id && $course_id, 404);
        $module_content = CourseContent::where('module_id', $module_id)->latest()->paginate(50);
        return Inertia::render('Admin/Course/Content/List', ['course_id' => $course_id, 'module_id' => $module_id, 'module_content' => $module_content]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        Gate::authorize('create', CourseContent::class);
        $module_id = $request->module_id;
        $course_id = $request->course_id;
        abort_unless($module_id && $course_id, 404);
        return Inertia::render('Admin/Course/Content/Form', ['module_id' => $module_id, 'course_id' => $course_id]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CourseContentRequest $request)
    {
        Gate::authorize('create', CourseContent::class);
        $valdiated = $request->validated();
        CourseContent::create($valdiated);
        $module_id = $request->module_id;
        $course_id = $request->course_id;
        abort_unless($module_id && $course_id, 404);
        return redirect()->route('admin.course-content.index', ['course_id' => $course_id, 'module_id' => $module_id])->with('success', 'Added successfully!');
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
    public function edit(CourseContent $course_content, Request $request)
    {
        Gate::authorize('update', $course_content);
        $module_id = $request->module_id;
        $course_id = $request->course_id;
        abort_unless($module_id && $course_id, 404);
        return Inertia::render('Admin/Course/Content/Form', ['module_content' => $course_content, 'course_id' => $course_id, 'module_id' => $module_id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CourseContentRequest $request, CourseContent $course_content)
    {
        Gate::authorize('update', $course_content);
        $valdiated = $request->validated();
        $course_content->update($valdiated);
        $module_id = $request->module_id;
        $course_id = $request->course_id;
        abort_unless($module_id && $course_id, 404);
        return redirect()->route('admin.course-content.index', ['course_id' => $course_id, 'module_id' => $module_id])->with('success', 'Added successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CourseContent $course_content, Request $request)
    {
        Gate::authorize('delete', $course_content);
        $course_content->delete();
        $module_id = $request->module_id;
        $course_id = $request->course_id;
        abort_unless($module_id && $course_id, 404);
        return redirect()->route('admin.course-content.index', ['course_id' => $course_id, 'module_id' => $module_id])->with('success', 'Added successfully!');
    }
}
