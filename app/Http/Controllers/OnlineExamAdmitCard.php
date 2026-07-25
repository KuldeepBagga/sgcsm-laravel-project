<?php

namespace App\Http\Controllers;

use App\Models\AssignExam;
use App\Models\Student;
use App\Printables;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OnlineExamAdmitCard extends Controller
{
    use Printables;

    public function index()
    {
        return Inertia::render('Frontend/Student/OnlineAdmitCard');
    }

    public function show_admit_card(Request $request)
    {
        $validated = $request->validate([
            'registration_no' => ['required', 'exists:students,registration_no']
        ]);

        $student = Student::select(
            'students.*',
            'assign_exams.id as assign_exam_id',
            'assign_exams.exam_id'
        )
            ->join('assign_exams', 'assign_exams.user_id', '=', 'students.student_id')
            ->where('students.registration_no', $validated['registration_no'])
            ->first();

        if (!$student) {
            return back()->withErrors([
                'registration_no' => 'No exam assigned for this student.'
            ]);
        }

        return Inertia::render('Frontend/Student/OnlineAdmitCard', [
            'student' => $student
        ]);
    }

    public function display_admit_card(Request $request)
    {
        return Printables::online_exam_admit_card($request->registration_no);
    }
}
