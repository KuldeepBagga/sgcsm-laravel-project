<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CourseContent extends Model
{
    protected $fillable = ['module_id', 'content'];

    public function module()
    {
        return $this->belongsTo(CourseModule::class, 'module_id', 'id');
    }
}
