<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PermissionRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (auth()->user()->role !== 'admin') {
            abort(403);
        }
        $permission = Permission::paginate(50);
        return Inertia::render('Admin/Permission/List',compact('permission'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        if (auth()->user()->role !== 'admin') {
            abort(403);
        }
        return Inertia::render('Admin/Permission/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PermissionRequest $request)
    {
        $validated = $request->validated();
        Permission::create($validated);
        return redirect(route('permission.index'))->with('success','Permission successfully created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        if (auth()->user()->role !== 'admin') {
            abort(403);
        }
        $permission = Permission::findOrFail($id);
        return Inertia::render('Admin/Permission/Form',compact("permission"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Permission $permission)
    {
        if (auth()->user()->role !== 'admin') {
            abort(403);
        }
        return Inertia::render('Admin/Permission/Form',[
            'permission' => $permission,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PermissionRequest $request, Permission $permission)
    {
        if (auth()->user()->role !== 'admin') {
            abort(403);
        }
        $validated = $request->validated();
        $permission->update($validated);
        return redirect(route('permission.index'))->with('success','Permission successfully updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Permission $permission)
    {
        if (auth()->user()->role !== 'admin') {
            abort(403);
        }

        $permission->delete();
        return redirect(route('permission.index'))->with('success','Permission successfully deleted.');
    }
}
