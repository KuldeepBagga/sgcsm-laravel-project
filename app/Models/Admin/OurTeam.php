<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class OurTeam extends Model
{
    use SoftDeletes;
    
    protected $fillable = ['name', 'designation', 'image', 'status', 'email', 'phone'];
}
