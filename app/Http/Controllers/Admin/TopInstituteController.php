<?php

namespace App\Http\Controllers\Admin;

use App\Models\TopInstitute;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\TopInstituteRequest;
use App\Models\Institute;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class TopInstituteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Gate::authorize('viewAny', TopInstitute::class);
        $topInstitute = TopInstitute::with('institute')->paginate(50);
        return Inertia::render('Admin/Institute/Top/List', compact('topInstitute'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', TopInstitute::class);
        $institute = Institute::all();
        return Inertia::render('Admin/Institute/Top/Form', compact('institute'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TopInstituteRequest $request)
    {
        Gate::authorize('create', TopInstitute::class);
        $validated = $request->validated();
        TopInstitute::create($validated);
        return redirect()->route('admin.top_institute.index')->with('success', 'Created succesfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(TopInstitute $topInstitute)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TopInstitute $topInstitute)
    {
        Gate::authorize('update', $topInstitute);
        $institute = Institute::all();
        return Inertia::render('Admin/Institute/Top/Form', compact('institute', 'topInstitute'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TopInstituteRequest $request, TopInstitute $topInstitute)
    {
        Gate::authorize('update', $topInstitute);
        $validated = $request->validated();
        $topInstitute->update($validated);
        return redirect()->route('admin.top_institute.index')->with('success', 'Updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TopInstitute $topInstitute)
    {
        Gate::authorize('delete', $topInstitute);
        $topInstitute->delete();
        return redirect()->route('admin.top_institute.index')->with('success', 'Deleted succesfully!');
    }
}
