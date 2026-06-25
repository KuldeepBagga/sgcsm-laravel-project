<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\InstituteRequest;
use App\Models\Institute;
use App\Models\User;
use App\Services\ImageService;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class InstituteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        Gate::authorize('viewAny',Institute::class);
        $query = Institute::query();

         if ($request->filled('center_code')) {
            $query->where('center_code', 'like', '%' . $request->center_code . '%');
        }

        if ($request->filled('center_name')) {
            $query->where('center_name', $request->center_name);
        }

        if ($request->filled('director')) {
            $query->where('director', $request->director);
        }

        if ($request->filled('state')) {
            $query->where('state', $request->state);
        }

        if ($request->filled('city')) {
            $query->where('city', $request->city);
        }

        if ($request->filled('pincode')) {
            $query->where('pincode', $request->pincode);
        }

        if ($request->filled('district')) {
            $query->where('district', $request->district);
        }
        
        if ($request->filled('authorization')) {
            $query->where('authorization', $request->authorization);
        }

        $institute = $query->latest()->paginate(50)->withQueryString();

        return Inertia::render('Admin/Institute/List', compact('institute'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create',Institute::class);
        return Inertia::render('Admin/Institute/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(InstituteRequest $request, ImageService $imageService)
    {
        Gate::authorize('create',Institute::class);
        $validated = $request->validated();
        if ($request->hasFile('image')) {
            $validated['image'] = $imageService->uploadAndResize(
                $request->file('image'),
                env('IMAGE_UPLOAD_PATH') ?? 'uploads',
                env('IMAGE_WIDTH') ?? 100,
                env('IMAGE_HEIGHT') ?? 100
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

        return redirect(route('admin.institute.index'))->with('success', 'Institute successfully created');
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
        Gate::authorize('update',$institute);
        return Inertia::render('Admin/Institute/Form', compact('institute'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(InstituteRequest $request, Institute $institute, ImageService $imageService)
    {
        Gate::authorize('update',$institute);
        
        $validated = $request->validated();
        if ($request->hasFile('image')) {
            $imageService->delete($institute->image);
            $validated['image'] = $imageService->uploadAndResize(
                $request->file('image'),
                env('IMAGE_UPLOAD_PATH') ?? 'uploads',
                env('IMAGE_WIDTH') ?? 100,
                env('IMAGE_HEIGHT') ?? 100
            );
        }

        $institute->update($validated);

        return redirect(route('admin.institute.index'))
            ->with('success', 'Institute updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Institute $institute)
    {
        Gate::authorize('delete',$institute);
        $institute->delete();
        return redirect(route('admin.institute.index'))->with('success', 'Institute deleted successfully');
    }
}
