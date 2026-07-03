<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Course extends Model
{
    use SoftDeletes;

    protected $fillable = ['name', 'category', 'duration', 'eligibility', 'short_name'];

    public function modules()
    {
        return $this->hasMany(CourseModule::class, 'course_id', 'id');
    }

    public function course_content()
    {
        return $this->hasMany(CourseContent::class, 'module_id', 'id');
    }
}
