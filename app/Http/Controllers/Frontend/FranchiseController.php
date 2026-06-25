<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Frontend\FranchiseRequest;
use App\Models\Franchise;
use Illuminate\Http\Request;

class FranchiseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia('Frontend/Franchise/Register');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FranchiseRequest $request)
    {
        $validated = $request->validated();
        Franchise::create([
            'center_name' => $validated['center_name'],
            'director' => $validated['director'],
            'state' => $validated['state'],
            'city' => $validated['city'],
            'district' => $validated['district'],
            'pin' => $validated['pin_code'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'mobile' => $validated['phone'],
            'is_approved' => "NOT APPROVED",
        ]);
        return redirect()->back()->with('success', 'Franchise registration successful!');
    }
}
