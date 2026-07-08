<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Institute;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CenterVerification extends Controller
{
    public function index()
    {
        return Inertia::render('Frontend/CenterVerification');
    }

    public function verify(Request $request)
    {
        $validated = $request->validate([
            'center_code' => 'required|exists:institutes,center_code'
        ]);

        $center = Institute::where('center_code', $validated['center_code'])->first();

        return Inertia::render('Frontend/CenterVerification', compact('center'));
    }
}
