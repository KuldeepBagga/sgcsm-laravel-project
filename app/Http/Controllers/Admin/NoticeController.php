<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\Admin\NoticeRequest;
use App\Models\Notice;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;

class NoticeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Gate::authorize('viewAny', Notice::class);
        $notice = Notice::latest()->paginate(50);
        return Inertia::render('Admin/Content/Notice/List', compact('notice'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', Notice::class);
        return Inertia::render('Admin/Content/Notice/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(NoticeRequest $request)
    {
        Gate::authorize('create', Notice::class);
        $validated = $request->validated();
        Notice::create($validated);
        return redirect()->route('admin.notice.index')->with('success', 'Created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Notice $notice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Notice $notice)
    {
        Gate::authorize('update', $notice);
        return Inertia::render('Admin/Content/Notice/Form', compact('notice'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(NoticeRequest $request, Notice $notice)
    {
        Gate::authorize('update', $notice);
        $validated = $request->validated();
        $notice->update($validated);
        return redirect()->route('admin.notice.index')->with('success', 'Updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Notice $notice)
    {
        Gate::authorize('delete', $notice);
        $notice->delete();
        return redirect()->route('admin.notice.index')->with('success', 'Deleted successfully!');
    }
}
