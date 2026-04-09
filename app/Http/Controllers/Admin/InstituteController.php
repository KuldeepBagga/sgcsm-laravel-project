<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\InstituteRequest;
use App\Models\Admin\Institute;
use App\Models\User;
use App\Services\ImageService;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class InstituteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $institute = Institute::paginate(50);

        return Inertia::render('Admin/Institute/List', compact('institute'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Institute/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(InstituteRequest $request, ImageService $imageService)
    {
        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $validated['image'] = $imageService->uploadAndResize(
                $request->file('image'), 'uploads', 100, 100
            );
        }

        $user = User::create([
            'name' => $validated['director'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['mobile']),
            'show_password' => $validated['mobile'],
            'role' => 'franchise'
        ]);

        $validated['user_id'] = $user->id;

        Institute::create($validated);

        return redirect(route('institute.index'))->with('success', 'Institute successfully created');
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
    public function edit(Institute $institute)
    {
        return Inertia::render('Admin/Institute/Form', compact('institute'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(InstituteRequest $request, Institute $institute, ImageService $imageService)
    {

        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $imageService->delete($institute->image);
            $validated['image'] = $imageService->uploadAndResize(
                $request->file('image'), 'uploads', 100, 100
            );
        }

        $institute->update($validated);

        return redirect(route('institute.index'))
            ->with('success', 'Institute updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Institute $institute)
    {
        $institute->delete();

        return redirect(route('institute.index'))->with('success', 'Institute deleted successfully');
    }
}
