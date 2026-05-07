<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\FranchiseRequest;
use App\Models\Admin\Franchise;
use App\Models\Admin\Institute;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class FranchiseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        Gate::authorize('viewAny', Franchise::class);
        //$franchise = Franchise::paginate(50);

        $query = Franchise::query();

        if ($request->filled('center_name')) {
            $query->where('center_name', 'like' , '%' . $request->center_name . '%');
        }

        if ($request->filled('director')) {
            $query->where('director', 'like' , '%' . $request->director . '%');
        }

        if ($request->filled('email')) {
            $query->where('email', 'like' , '%' . $request->email . '%');
        }

        if ($request->filled('mobile')) {
            $query->where('mobile', 'like' , '%' . $request->mobile . '%');
        }

        $franchise = $query->paginate(50)->withQueryString();

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

        return redirect(route('admin.franchise.index'))->with('success', 'Franchise created successfully');
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

        return redirect(route('admin.franchise.index'))->with('success', 'Franchise updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Franchise $franchise)
    {
        Gate::authorize('delete', $franchise);
        $franchise->delete();

        return redirect(route('admin.franchise.index'))->with('success', 'Franchise deleted successfully');
    }

    public function approve(Franchise $franchise)
    {
        Gate::authorize('approve', $franchise);

        //when approved user created
        $user = User::create([
            'name' => $franchise->director,
            'email' => $franchise->email,
            'password' => Hash::make($franchise->email),
            'show_password' => $franchise->email
        ]);

        $user->assignRole('franchise');

        Institute::create([
            'center_name' => $franchise->center_name,
            'director' => $franchise->director,
            'state' => $franchise->state,
            'city' => $franchise->city,
            'district' => $franchise->district,
            'pin' => $franchise->pin,
            'email' => $franchise->email,
            'phone' => $franchise->phone,
            'mobile' => $franchise->mobile,
            'user_id' => $user->id,
            'authorization' => 'NOT ISSUED',
            'status' => 'ACTIVE',
            'authorized' => 0
        ]);

        $franchise->update([
            'is_approved' => 'APPROVED'
        ]);

        return redirect(route('admin.franchise.index'))->with('success', 'Franchise approved successfully');
    }
}
