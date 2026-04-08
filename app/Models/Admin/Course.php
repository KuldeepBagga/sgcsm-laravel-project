<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = ['name', 'category', 'duration'];
}
