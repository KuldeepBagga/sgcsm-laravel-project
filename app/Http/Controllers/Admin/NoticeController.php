<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\Admin\NoticeRequest;
use App\Models\Notice;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class NoticeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $notice = Notice::latest()->paginate(50);
        return Inertia::render('Admin/Content/Notice/List', compact('notice'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Content/Notice/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(NoticeRequest $request)
    {
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
        return Inertia::render('Admin/Content/Notice/Form', compact('notice'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(NoticeRequest $request, Notice $notice)
    {
        $validated = $request->validated();
        $notice->update($validated);
        return redirect()->route('admin.notice.index')->with('success', 'Updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Notice $notice)
    {
        $notice->delete();
        return redirect()->route('admin.notice.index')->with('success', 'Deleted successfully!');
    }
}
