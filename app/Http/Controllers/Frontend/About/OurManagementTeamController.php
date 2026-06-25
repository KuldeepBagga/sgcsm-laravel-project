<?php

namespace App\Http\Controllers\Frontend\About;

use App\Http\Controllers\Controller;
use App\Models\OurTeam;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OurManagementTeamController extends Controller
{
    public function our_team()
    {
        $our_team = OurTeam::latest()->get();
        return Inertia::render('Frontend/About/OurManagementTeam', compact('our_team'));
    }
}
