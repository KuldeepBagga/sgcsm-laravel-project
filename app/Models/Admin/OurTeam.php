<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class OurTeam extends Model
{
    protected $fillable = ['name', 'designation', 'photo', 'status', 'email', 'phone'];
}
