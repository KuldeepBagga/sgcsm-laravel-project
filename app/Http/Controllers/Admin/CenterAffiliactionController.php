<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CenterAffiliationRequest;
use App\Models\Admin\CenterAffiliation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class CenterAffiliactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Gate::authorize('viewAny',CenterAffiliation::class);
        $affiliation = CenterAffiliation::paginate(50);
        return Inertia::render('Admin/Center/Affiliation/List', compact('affiliation'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create',CenterAffiliation::class);
        return Inertia::render('Admin/Center/Affiliation/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CenterAffiliationRequest $request)
    {
        Gate::authorize('create',CenterAffiliation::class);
        $validated = $request->validated();
        CenterAffiliation::create($validated);
        return redirect()->route('admin.center_affiliation.index')
                ->with('success',"Center affiliation created successfully!");
    }

    /**
     * Display the specified resource.
     */
    public function show(CenterAffiliation $affiliation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CenterAffiliation $affiliation)
    {
        Gate::authorize('update',$affiliation);
        return inertia::render('Admin/Center/Affiliation/Form',compact('affiliation'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CenterAffiliationRequest $request, CenterAffiliation $affiliation)
    {
        Gate::authorize('update',$affiliation);
        $validated = $request->validated();
        $affiliation->update($validated);
        return redirect()->route('admin.center_affiliation.index')
                ->with('success',"Center affiliation updated successfully!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CenterAffiliation $affiliation)
    {
        Gate::authorize('delete',$affiliation);
        $affiliation->delete();
        return redirect()->route('admin.center_affiliation.index')
                ->with('success',"Center affiliation deleted successfully!");
    }
}
