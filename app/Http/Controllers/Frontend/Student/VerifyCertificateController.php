<?php

namespace App\Http\Controllers\Frontend\Student;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VerifyCertificateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $certificate = null;

        if ($request->has('certificate_no')) {
            $validated = $request->validate([
                'certificate_no' => 'required|string|exists:certificates,certificate_number',
            ]);

            $certificate = Student::with(['course', 'institute', 'certificate'])
                ->whereHas('certificate', function ($query) use ($validated) {
                    $query->where('certificate_number', $validated['certificate_no']);
                })
                ->first();
        }

        return Inertia::render('Frontend/Student/VerifyCertificate', [
            'certificate' => $certificate,
            'certificate_no' => $request->input('certificate_no', ''),
        ]);
    }
}
