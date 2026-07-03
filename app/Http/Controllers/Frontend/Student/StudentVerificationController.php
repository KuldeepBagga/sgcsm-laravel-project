<?php

namespace App\Http\Controllers\Frontend\Student;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentVerificationController extends Controller
{

    public function index()
    {
        return Inertia::render('Frontend/Student/StudentVerification');
    }

    public function verify(Request $request)
    {
        $validate = $request->validate([
            'registration_no' => 'required|exists:students,registration_no',
            'center_code' => 'required|exists:students,center_code',
        ]);

        $student = Student::with('course')->where('registration_no', $validate['registration_no'])->where('center_code', $validate['center_code'])->first();

        return Inertia::render('Frontend/Student/StudentVerification', [
            'student' => $student
        ]);
    }
}
