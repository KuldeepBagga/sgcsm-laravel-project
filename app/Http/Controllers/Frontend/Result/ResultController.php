<?php

namespace App\Http\Controllers\Frontend\Result;

use App\Http\Controllers\Controller;
use App\Models\ResultDetails;
use App\Printables;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ResultController extends Controller
{
    use Printables;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Frontend/Student/OnlineResult');
    }

    public function show(Request $request)
    {
        $validated = $request->validate([
            'registration_no' => [
                'required',
                'exists:result_details,registration_no',
            ],
        ]);

        $result_details = ResultDetails::firstWhere(
            'registration_no',
            $validated['registration_no']
        );

        abort_if(!$result_details, 404);

        return Inertia::render('Frontend/Student/OnlineResult', compact('result_details'));
    }

    public function display_online_result(Request $request)
    {
        abort_if(!$request->result_id, 404);

        $students = $this->show_duplicate_online_result($request->result_id);

        return Inertia::render('Admin/Result/Show/Result', compact('students'));
    }
}
