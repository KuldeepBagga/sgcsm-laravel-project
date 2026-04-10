<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StudentRequest;
use App\Models\Admin\Course;
use App\Models\Admin\Institute;
use App\Models\Admin\Student;
use App\Models\User;
use App\Services\ImageService;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $student = Student::with('course')->paginate(50);
        
        return Inertia::render('Admin/Student/List', compact('student'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $institute = Institute::select('center_code')->get();
        $course = Course::all();

        return Inertia::render('Admin/Student/Form', compact('institute', 'course'));
    }

    public function get_center_name_by_center_code(string $centerCode)
    {
        $data = Institute::where('center_code', $centerCode)->first();

        return response()->json([
            'data' => $data,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StudentRequest $request, ImageService $imageService)
    {
        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $validated['image'] = $imageService->uploadAndResize(
                $request->file('image'), 'uploads', 100, 100
            );
        }

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['phone'].time().'@gmail.com',
            'password'=> Hash::make($validated['phone']),
            'show_password'=> $validated['phone']
        ]);

        $user->assignRole('student');

        $validated['student_id'] = $user->id;

        Student::create($validated);

        return redirect(route('student.index'))->with('success', 'Student created successfully!');
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
    public function edit(Student $student)
    {
        $institute = Institute::select('center_code')->get();
        $course = Course::all();
        return Inertia::render('Admin/Student/Form', compact('student','institute','course'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StudentRequest $request, Student $student, ImageService $imageService)
    {
        $validated = $request->validated();
        if ($request->hasFile('image')) {
            $imageService->delete($student->image);
            $validated['image'] = $imageService->uploadAndResize(
                $request->file('image'), 'uploads', 100, 100
            );
        }

        $student->update($validated);

        return redirect(route('student.index'))->with('success', 'Student updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        $student->delete();

        return redirect(route('student.index'))->with('success', 'Student deleted successfully!');
    }
}
