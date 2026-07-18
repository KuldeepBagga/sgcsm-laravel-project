<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = ['exam_id', 'question'];

    public function exam()
    {
        return $this->belongsTo(ExamCourse::class, 'exam_id');
    }

    public function answers()
    {
        return $this->hasMany(QuestionAnswer::class, 'question_id');
    }
}
