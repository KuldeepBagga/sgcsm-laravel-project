<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\OurTeamRequest;
use App\Models\Admin\OurTeam;
use Illuminate\Http\Request;
use App\Services\ImageService;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class OurTeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Gate::authorize('viewAny',OurTeam::class);
        $ourteam = OurTeam::latest()->paginate(50);
        return Inertia::render('Admin/OurTeam/List', compact('ourteam'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create',OurTeam::class);
        return Inertia::render('Admin/OurTeam/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(OurTeamRequest $request, ImageService $imageService)
    {
        Gate::authorize('create',OurTeam::class);
        $validated = $request->validated();
        if ($request->hasFile('image')) {
            $validated['image'] = $imageService->uploadAndResize(
                $request->file('image'),
                env('IMAGE_UPLOAD_PATH') ?? 'uploads',
                env('IMAGE_WIDTH') ?? 100,
                env('IMAGE_HEIGHT') ?? 100
            );
        }

        OurTeam::create($validated);

        return redirect()->route('ourteam.index')
            ->with('success', 'Our team created successfully!');
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
    public function edit(OurTeam $ourteam)
    {
        Gate::authorize('update',$ourteam);
        return Inertia::render('Admin/OurTeam/Form', compact('ourteam'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(OurTeamRequest $request, OurTeam $ourteam, ImageService $imageService)
    {
        Gate::authorize('update',$ourteam);
        $validated = $request->validated();
        if ($request->hasFile('image')) {
            $imageService->delete($ourteam->image);
            $validated['image'] = $imageService->uploadAndResize(
                $request->file('image'),
                env('IMAGE_UPLOAD_PATH') ?? 'uploads',
                env('IMAGE_WIDTH') ?? 100,
                env('IMAGE_HEIGHT') ?? 100
            );
        }

        $ourteam->update($validated);

        return redirect()->route('ourteam.index')->with('success','Our team successfully updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OurTeam $ourteam, ImageService $imageService)
    {
        Gate::authorize('delete',$ourteam);
        $ourteam->delete();
        $imageService->delete($ourteam->image);
        return redirect()->route('ourteam.index')->with('success','Deleted successfully!');
    }
}
