<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\FranchiseRequest;
use App\Models\Admin\Franchise;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class FranchiseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Gate::authorize('viewAny', Franchise::class);
        $franchise = Franchise::paginate(50);

        return Inertia::render('Admin/Franchise/List', compact('franchise'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', Franchise::class);

        return Inertia::render('Admin/Franchise/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FranchiseRequest $request)
    {
        Gate::authorize('create', Franchise::class);
        $validated = $request->validated();
        Franchise::create($validated);

        return redirect(route('franchise.index'))->with('success', 'Franchise created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Franchise $franchise)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Franchise $franchise)
    {
        Gate::authorize('update', $franchise);

        return Inertia::render('Admin/Franchise/Form', compact('franchise'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FranchiseRequest $request, Franchise $franchise)
    {
        Gate::authorize('update', $franchise);
        $validated = $request->validated();
        $franchise->update($validated);

        return redirect(route('franchise.index'))->with('success', 'Franchise updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Franchise $franchise)
    {
        Gate::authorize('delete', $franchise);
        $franchise->delete();

        return redirect(route('franchise.index'))->with('success', 'Franchise deleted successfully');
    }
}
