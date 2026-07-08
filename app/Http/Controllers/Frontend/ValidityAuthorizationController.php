<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\CenterAffiliation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ValidityAuthorizationController extends Controller
{
    public function index()
    {
        return Inertia::render('Frontend/Authorization/ValidityAuthorization');
    }

    public function verify(Request $request)
    {
        $request->validate([
            'certificate_no' => 'required|exists:center_affiliations,certificate_number',
        ]);

        $certificate = CenterAffiliation::with('institute')->where('certificate_number', $request->certificate_no)->first();

        return Inertia::render('Frontend/Authorization/ValidityAuthorization', compact('certificate'));
    }
}
