<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\RoleRequest;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $role = Role::with('permissions')->paginate(50);
        return Inertia::render('Admin/Role/List', compact('role'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $allPermissions = Permission::all();

        return Inertia::render('Admin/Role/Form', compact('allPermissions'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RoleRequest $request)
    {
        $validated = $request->validated();

        $role = Role::create([
            'name' => $validated['name'],
        ]);

        if (! empty($validated['permissions'])) {
            $permissions = Permission::whereIn('id', $validated['permissions'])
                ->pluck('name')
                ->toArray();

            $role->givePermissionTo($permissions);
        }

        return redirect(route('role.index'))->with('success', 'Role successfully created!');
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
    public function edit(string $id)
    {
        $role = Role::with('permissions')->findOrFail($id);

        return Inertia::render('Admin/Role/Form', [
            'role' => $role,
            'allPermissions' => Permission::select('id', 'name')->get(),
            'selectedPermissions' => $role->permissions->pluck('id'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RoleRequest $request, string $id)
    {
        $validated = $request->validated();

        $role = Role::findOrFail($id);

        // update role name
        $role->update([
            'name' => $validated['name'],
        ]);

        // sync permissions
        if (! empty($validated['permissions'])) {
            $permissions = Permission::whereIn('id', $validated['permissions'])
                ->pluck('name')
                ->toArray();

            $role->syncPermissions($permissions);
        } else {
            // remove all permissions
            $role->syncPermissions([]);
        }

        return redirect()->route('role.index')->with('success', 'Role updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $role = Role::findOrFail($id);

        if (strtolower($role->name) === 'admin') {
            return redirect()->back()->with('error', 'Admin role cannot be deleted!');
        }

        if ($role->users()->count() > 0) {
            return redirect()->back()->with('error', 'Role is assigned to users!');
        }

        $role->delete();

        return redirect()->route('role.index')->with('success', 'Role deleted successfully!');
    }
}
