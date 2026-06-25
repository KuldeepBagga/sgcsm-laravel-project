<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ResultDetailsRequest;
use App\Models\ResultDetails;
use App\Printables;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class ResultDetailsController extends Controller
{

    use Printables;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Gate::authorize('viewAny', ResultDetails::class);

        $query = DB::table('students')
            ->join('result_details', 'result_details.registration_no', '=', 'students.registration_no')
            ->leftJoin('institutes', 'students.institute_id', '=', 'institutes.id');

        if (auth()->user()->hasRole('franchise')) {
            $query->where('institutes.user_id', auth()->id());
        }

        $result_details = $query->paginate(50);

        return Inertia::render('Admin/Result/Details/List', compact('result_details'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', ResultDetails::class);
        return Inertia::render('Admin/Result/Details/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ResultDetailsRequest $request)
    {
        Gate::authorize('create', ResultDetails::class);
        $validated = $request->validated();
        ResultDetails::create($validated);
        return redirect()->route('admin.result_details.index')->with('success', 'Result details added successfully.');
    }

    public function display_result(string $id)
    {
        $students = $this->show_duplicate_online_result($id);
        return Inertia::render('Admin/Result/Show/Result', compact('students'));
    }

    /**
     * Display the specified resource.
     */
    // public function show(ResultDetails $result_details)
    // {
    //     $this->show_result($result_details);
    // }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ResultDetails $result_details)
    {
        Gate::authorize('update', $result_details);
        return Inertia::render('Admin/Result/Details/Form', compact('result_details'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ResultDetailsRequest $request, ResultDetails $result_details)
    {
        Gate::authorize('update', $result_details);
        $validated = $request->validated();
        $result_details->update($validated);
        return redirect()->route('admin.result_details.index')->with('success', 'Result details updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ResultDetails $result_details)
    {
        Gate::authorize('delete', $result_details);
        $result_details->delete();
        return redirect()->route('admin.result_details.index')->with('success', 'Result details deleted successfully.');
    }

    public function genereate_marksheet(string $id)
    {
        Gate::authorize('result.marksheet.show', ResultDetails::class);
        abort_if(!$id, 404);
        Printables::generate_original_marksheet($id);
    }
}
