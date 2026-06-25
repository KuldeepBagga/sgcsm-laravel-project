<?php

namespace App\Http\Controllers\GetInTouch;

use App\Http\Controllers\Controller;
use App\Models\Institute;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthorizedStudyCenterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $institutes = [];

        return Inertia::render('Frontend/GetInTouch/AuthorizedStudyCenter', compact('institutes'));
    }

    public function show(Request $request)
    {
        $validate = $request->validate([
            'states' => ['required']
        ]);

        $institutes = Institute::where('state', 'like', "%{$validate['states']}%")
            ->where('authorized', 0)
            ->get();

        return Inertia::render('Frontend/GetInTouch/AuthorizedStudyCenter', compact('institutes'));
    }
}
