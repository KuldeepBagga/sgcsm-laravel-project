<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StudentRequest;
use App\Models\Course;
use App\Models\Institute;
use App\Models\Student;
use App\Models\User;
use App\Printables;
use App\Services\ImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //$student = Student::with('course')->paginate(50);
        Gate::authorize('viewAny', Student::class);
        $query = Student::query();

        if (auth()->user()->hasRole('franchise')) {
            $query->whereHas('institute', function ($q) {
                $q->where('user_id', auth()->id());
            });
        }

        if ($request->filled('name')) {
            $query->where('name', 'like', '%' . $request->name . '%');
        }

        if ($request->filled('father_name')) {
            $query->where('father_name', 'like', '%' . $request->father_name . '%');
        }

        if ($request->filled('registration_no')) {
            $query->where('registration_no', 'like', '%' . $request->registration_no . '%');
        }

        if ($request->filled('date_of_birth')) {
            $query->where('date_of_birth', 'like', '%' . $request->date_of_birth . '%');
        }

        if ($request->filled('course')) {
            $query->whereHas('course', function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->course . '%');
            });
        }

        if ($request->filled('scan')) {
            $query->where('scan', 'like', '%' . $request->scan . '%');
        }

        if ($request->filled('center_code')) {
            $query->where('center_code', 'like', '%' . $request->center_code . '%');
        }

        if ($request->filled('certificate_issued')) {
            $query->where('certificate_issued', 'like', '%' . $request->certificate_issued . '%');
        }

        if ($request->filled('paid')) {
            $query->where('paid', 'like', '%' . $request->paid . '%');
        }

        if ($request->filled('certificate_no')) {
            $query->where('certificate_no', 'like', '%' . $request->certificate_no . '%');
        }

        $student = $query->with('course')->latest()->paginate(50)->withQueryString();

        return Inertia::render('Admin/Student/List', compact('student'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', Student::class);

        if (auth()->user()->hasRole('franchise')) {
            $institute = Institute::where('user_id', auth()->id())->select('center_code')->get();
        } else {
            $institute = Institute::select('center_code')->get();
        }

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
        Gate::authorize('create', Student::class);
        $validated = $request->validated();
        if ($request->hasFile('image')) {
            $validated['image'] = $imageService->uploadAndResize(
                $request->file('image'),
                env('IMAGE_UPLOAD_PATH') ?? 'uploads',
                env('IMAGE_WIDTH') ?? 100,
                env('IMAGE_HEIGHT') ?? 100
            );
        }

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['phone'] . time() . '@gmail.com',
            'password' => Hash::make($validated['phone']),
            'show_password' => $validated['phone']
        ]);

        $user->assignRole('student');

        $validated['student_id'] = $user->id;

        Student::create($validated);

        return redirect(route('admin.student.index'))->with('success', 'Student created successfully!');
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
        Gate::authorize('update', $student);
        if (auth()->user()->hasRole('franchise')) {
            $institute = Institute::where('user_id', auth()->id())->select('center_code')->get();
        } else {
            $institute = Institute::select('center_code')->get();
        }
        $course = Course::all();
        return Inertia::render('Admin/Student/Form', compact('student', 'institute', 'course'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StudentRequest $request, Student $student, ImageService $imageService)
    {
        Gate::authorize('update', $student);
        $validated = $request->validated();
        if ($request->hasFile('image')) {
            $imageService->delete($student->image);
            $validated['image'] = $imageService->uploadAndResize(
                $request->file('image'),
                env('IMAGE_UPLOAD_PATH') ?? 'uploads',
                env('IMAGE_WIDTH') ?? 100,
                env('IMAGE_HEIGHT') ?? 100
            );
        }

        $student->update($validated);

        return redirect(route('admin.student.index'))->with('success', 'Student updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        Gate::authorize('delete', $student);
        $student->delete();
        return redirect(route('admin.student.index'))->with('success', 'Student deleted successfully!');
    }

    public function generate_qr_code(Student $student)
    {
        abort_unless($student, 404);
        abort_unless(auth()->user()->hasRole('admin'), 403);
        $registration_no = str_replace('/', '-', $student->registration_no);
        $student->update(['qr_code' => "uploads/qr_code/{$registration_no}.png"]);
        $qrCode = QrCode::format('png')->size(250)->generate('hello');
        Storage::disk('public')->put("uploads/qr_code/{$registration_no}.png", $qrCode);
        return redirect()->route('admin.student.index')->with('success', 'QR Code Generated Successfully!');
    }

    public function icard(string $registration_no)
    {
        return Printables::print_icard($registration_no);
    }
}
