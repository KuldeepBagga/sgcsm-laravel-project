<?php

namespace App\Http\Controllers\Admin\Content;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\BannerRequest;
use App\Models\Banner;
use App\Services\ImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class BannerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Gate::authorize('viewAny', Banner::class);
        $banner = Banner::latest()->paginate(50);
        return Inertia::render('Admin/Content/Banner/List', compact('banner'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', Banner::class);
        return Inertia::render('Admin/Content/Banner/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BannerRequest $request, ImageService $imageService)
    {
        Gate::authorize('create', Banner::class);
        $validated = $request->validated();
        if ($request->hasFile('image')) {
            $validated['image'] = $imageService->uploadAndResize(
                $request->file('image'),
                env('IMAGE_UPLOAD_PATH') ?? 'uploads',
                env('IMAGE_WIDTH') ?? 1920,
                env('IMAGE_HEIGHT') ?? 1080
            );
        }

        Banner::create($validated);
        return redirect()->route('admin.banner.index')->with('success', 'Created Successfully!');
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
    public function edit(Banner $banner)
    {
        Gate::authorize('update', $banner);
        return Inertia::render('Admin/Content/Banner/Form', compact('banner'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BannerRequest $request, Banner $banner, ImageService $imageService)
    {
        Gate::authorize('update', $banner);
        $validated = $request->validated();
        if ($request->hasFile('image')) {
            $imageService->delete($banner->image);
            $validated['image'] = $imageService->uploadAndResize(
                $request->file('image'),
                env('IMAGE_UPLOAD_PATH') ?? 'uploads',
                env('IMAGE_WIDTH') ?? 1920,
                env('IMAGE_HEIGHT') ?? 1080
            );
        }

        $banner->update($validated);
        return redirect()->route('admin.banner.index')->with('success', 'Created Updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Banner $banner, ImageService $imageService)
    {
        Gate::authorize('delete', $banner);
        $imageService->delete($banner->image);
        $banner->delete();
        return redirect()->route('admin.banner.index')->with('success', 'Successfully deleted!');
    }
}
