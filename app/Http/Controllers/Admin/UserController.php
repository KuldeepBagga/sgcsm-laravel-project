<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UserRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        abort_if(!Auth::user()?->hasRole('admin'), 403, 'UNAUTHORIZED');
        $user = User::with('roles')->paginate(50);
        return Inertia::render('Admin/User/List', compact('user'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        abort_if(!Auth::user()?->hasRole('admin'), 403, 'UNAUTHORIZED');
        $roles = Role::pluck('name'); 
        return Inertia::render('Admin/User/Form', [
            'user' => null, 
            'roles' => $roles,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {
        abort_if(!Auth::user()?->hasRole('admin'), 403, 'UNAUTHORIZED');
        $validated = $request->validated();
        $validated['show_password'] = $request->password;
        $user = User::create($validated);
        $user->syncRoles($validated['role']);
        // $user->update($validated);
        return redirect(route('admin.user.index'))->with('success', 'User created successfully');
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
    public function edit(User $user)
    {
        abort_if(!Auth::user()?->hasRole('admin'), 403, 'UNAUTHORIZED');
        $roles = Role::all();
        $user->load('roles');
        return Inertia::render('Admin/User/Form', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'roles' => $user->roles->pluck('name'),
            ],
            'roles' => $roles->pluck('name'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserRequest $request, User $user)
    {
        abort_if(!Auth::user()?->hasRole('admin'), 403, 'UNAUTHORIZED');
        $validated = $request->validated();
        if (empty($validated['password'])) {
            unset($validated['password']);
            unset($validated['show_password']);
        } else {
            $validated['password'] = bcrypt($validated['password']);
            $validated['show_password'] = $request->password;
        }
        $user->update($validated);
        $user->syncRoles($validated['role']);

        return redirect(route('admin.user.index'))->with('success', 'User updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        abort_if(!Auth::user()?->hasRole('admin'), 403, 'UNAUTHORIZED');
        if (strtolower($user->role) === 'admin') {
            return redirect(route('admin.user.index'))->with('error', 'User admin cannot be deleted!');
        }
        $user->delete();
        return redirect(route('admin.user.index'))->with('success', 'User deleted successfully');
    }
}
