<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OnlineExamResult extends Model
{
     protected $fillable = ['user_id', 'exam_id', 'question_count', 'correct_answer_count'];

     public function student()
     {
          return $this->belongsTo(Student::class, 'user_id', 'student_id');
     }

     public function institute()
     {
          return $this->hasOneThrough(Institute::class, Student::class, 'student_id', 'id', 'user_id', 'institute_id');
     }

     public function course(){
          return $this->hasOneThrough(Course::class, Student::class , 'course_id', 'id');
     }
}
