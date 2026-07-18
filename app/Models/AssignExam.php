<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AssignExam extends Model
{
    protected $fillable = ['user_id', 'exam_id', 'status', 'exam_time'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function exam()
    {
        return $this->hasMany(ExamCourse::class, 'id', 'exam_id');
    }

    public function questions()
    {
        return $this->hasMany(Question::class, 'exam_id', 'exam_id');
    }

    public function answers()
    {
        return $this->hasMany(QuestionAnswer::class, 'question_id', 'id');
    }

    public function student()
    {
        return $this->belongsTo(Student::class, 'user_id', 'student_id');
    }
}
