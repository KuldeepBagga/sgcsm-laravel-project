<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ResultRequest;
use App\Models\Result;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Spatie\SimpleExcel\SimpleExcelReader;

class ResultController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        Gate::authorize('viewAny', Result::class);
        if (!$request->id) {
            abort(404);
        }
        $id = $request->id;
        $result = Result::where('result_details_id', $id)
            ->latest()
            ->paginate(50);
        return Inertia::render('Admin/Result/List', compact('id', 'result'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        Gate::authorize('create', Result::class);
        if (!$request->id) {
            abort(404);
        }
        $id = $request->id;
        return Inertia::render('Admin/Result/Form', [
            'id' => $request->id,
            'update' => false
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ResultRequest $request)
    {
        Gate::authorize('create', Result::class);
        $validated = $request->validated();
        $path = $request->file('file')->store('imports');
        $rows = SimpleExcelReader::create(Storage::path($path))->getRows();

        foreach ($rows as $row) {
            Result::create([
                'result_details_id'      => $request->id,
                'subject'        => $row['subject'],
                'min_marks'      => $row['min_marks'],
                'max_marks'      => $row['max_marks'],
                'obtained_marks' => $row['marks_obtained'],
            ]);
        }

        return redirect()->route('admin.result.index', ['id' => $request->id])->with('success', 'Data imported successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Result $result)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Result $result, Request $request)
    {
        Gate::authorize('update', $result);
        if (!$request->id) {
            abort(404);
        }
        $id = $request->id;
        return Inertia::render('Admin/Result/Form', [
            'result' => $result,
            'id' => $id,
            'update' => true
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Result $result)
    {
        Gate::authorize('update', $result);
        $validated = $request->validate([
            'subject' => 'required',
            'min_marks' => 'required',
            'max_marks' => 'required',
            'obtained_marks' => 'required'
        ]);

        $result->update($validated);

        return redirect()->route('admin.result.index', ['id' => $request->id])->with('success', 'Result updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Result $result)
    {
        Gate::authorize('delete', $result);
        $result->delete();
        return redirect()->back()->with('success', 'Result deleted successfully');
    }
}
