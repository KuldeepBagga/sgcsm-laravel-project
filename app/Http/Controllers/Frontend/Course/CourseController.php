<?php

namespace App\Http\Controllers\Frontend\Course;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function index(Request $request)
    {
        abort_if(!$request->course, 404);
        $get_course_name = strtoupper($request->course);

        $course = Course::with('modules.contents')
            ->where('category', $get_course_name)
            ->first();

        $all_course = Course::with('modules.contents')
            ->where('category', $get_course_name)
            ->get();

        return Inertia::render('Frontend/Course/Courses', compact('course', 'all_course'));
    }

    public function show(Request $request)
    {
        abort_if(!$request->id, 404);
        $course_id = strtoupper($request->id);
        $course_category = strtoupper($request->category);

        $all_course = Course::with('modules.contents')
            ->where('category', $course_category)
            ->get();

        $course = Course::with('modules.contents')
            ->where('id', $course_id)
            ->first();

        return Inertia::render('Frontend/Course/Show', compact('course', 'all_course'));
    }

    public function search(Request $request)
    {
        $searchTerm = $request->search;
        $courses = Course::where('name', 'like', '%' . $searchTerm . '%')->get();
        return Inertia::render('Frontend/Course/Search', compact('courses', 'searchTerm'));
    }
}
