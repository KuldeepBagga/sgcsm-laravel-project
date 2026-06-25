<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\TestimonialRequest;
use App\Models\Testimonial;
use App\Services\ImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Gate::authorize('viewAny', Testimonial::class);
        $testimonial = Testimonial::latest()->paginate(50);
        return Inertia::render("Admin/Testimonial/List", compact('testimonial'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', Testimonial::class);
        return Inertia::render("Admin/Testimonial/Form");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TestimonialRequest $request, ImageService $imageService)
    {
        Gate::authorize('create', Testimonial::class);
        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $validated['image'] = $imageService->uploadAndResize(
                $request->file('image'),
                env('IMAGE_UPLOAD_PATH') ?? 'uploads',
                env('IMAGE_WIDTH') ?? 100,
                env('IMAGE_HEIGHT') ?? 100
            );
        }

        Testimonial::create($validated);
        return redirect()->route('admin.testimonial.index')->with('success', 'Testimonial successfully submited.');
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
    public function edit(Testimonial $testimonial)
    {
        Gate::authorize('update', $testimonial);
        return Inertia::render('Admin/Testimonial/Form', compact('testimonial'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TestimonialRequest $request, Testimonial $testimonial, ImageService $imageService)
    {
        Gate::authorize('update', $testimonial);
        $validated = $request->validated();
        if ($request->hasFile('image')) {
            $imageService->delete($testimonial->image);
            $validated['image'] = $imageService->uploadAndResize(
                $request->file('image'),
                env('IMAGE_UPLOAD_PATH') ?? 'uploads',
                env('IMAGE_WIDTH') ?? 100,
                env('IMAGE_HEIGHT') ?? 100
            );
        }

        $testimonial->update($validated);
        return redirect()->route('admin.testimonial.index')->with('success', 'Testimonial successfully updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Testimonial $testimonial)
    {
        Gate::authorize('delete', $testimonial);
        $testimonial->delete();
        return redirect()->route('admin.testimonial.index')->with('success', 'Testimonial successfully deleted.');
    }
}
