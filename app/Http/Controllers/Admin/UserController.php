<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UserRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Gate::authorize('viewAny', User::class);
        $user = User::with('roles')->paginate(50);
        return Inertia::render('Admin/User/List', compact('user'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', User::class);
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
        Gate::authorize('create', User::class);
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
        Gate::authorize('update', $user);
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
        Gate::authorize('update', $user);
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
        Gate::authorize('delete', $user);
        if ($user->hasRole('admin')) {
            return redirect(route('admin.user.index'))->with('error', 'User admin cannot be deleted!');
        }
        $user->delete();
        return redirect(route('admin.user.index'))->with('success', 'User deleted successfully');
    }
}
