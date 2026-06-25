<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CertificateRequest;
use App\Models\Certificate;
use App\Models\Student;
use App\Printables;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class CertificateController extends Controller
{
    use Printables;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Gate::authorize('viewAny', Certificate::class);

        $query = Certificate::with('student');

        if (auth()->user()->hasRole('franchise')) {
            $centerCode = auth()->user()->institute?->center_code;

            $query->whereHas('student', function ($q) use ($centerCode) {
                $q->where('center_code', $centerCode);
            });
        }

        $certificate = $query
            ->when(request('certificate_number'), function ($query, $certificate_number) {
                $query->where('certificate_number', 'like', "%{$certificate_number}%");
            })
            ->when(
                request('enrollment_no'),
                function ($query, $enrollment_no) {
                    $query->whereHas('student', function ($q) use ($enrollment_no) {
                        $q->where('enrollment_no', 'like', "%{$enrollment_no}%");
                    });
                }
            )
            ->when(
                request('center_code') && auth()->user()->hasRole('admin'),
                function ($query) {
                    $query->whereHas('student', function ($q) {
                        $q->where(
                            'center_code',
                            'like',
                            '%' . request('center_code') . '%'
                        );
                    });
                }
            )
            ->latest()
            ->paginate(50)
            ->withQueryString();

        return Inertia::render('Admin/Certificate/List', compact('certificate'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', Certificate::class);
        return Inertia::render('Admin/Certificate/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CertificateRequest $request)
    {
        Gate::authorize('create', Certificate::class);
        $validated = $request->validated();
        Certificate::create($validated);
        return redirect()->route('admin.certificate.index')->with('success', 'Certificate created successfully.');
    }

    public function generate_certificate(string $id)
    {
        Gate::authorize('generate', Certificate::class);
        abort_if(!$id, 404);

        $students = Student::with('course')
            ->with('institute')
            ->with('certificate')
            ->whereHas('certificate', function ($query) use ($id) {
                $query->where('id', $id);
            })->first();

        abort_if(!$students, 404);

        if ($students['certificate']['certificate_type'] === "CERTIFICATE") {
            Printables::generate_certificate($students);
        }
        if ($students['certificate']['certificate_type'] === "DIPLOMA") {
            Printables::generate_diploma($students);
        }
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
    public function edit(Certificate $certificate)
    {
        Gate::authorize('update', $certificate);
        return Inertia::render('Admin/Certificate/Form', compact('certificate'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CertificateRequest $request, Certificate $certificate)
    {
        Gate::authorize('update', $certificate);
        $validated = $request->validated();
        $certificate->update($validated);
        return redirect()->route('admin.certificate.index')->with('success', 'Certificate updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Certificate $certificate)
    {
        Gate::authorize('delete', $certificate);
        $certificate->delete();
        return redirect()->route('admin.certificate.index')->with('success', 'Certificate deleted successfully.');
    }
}
