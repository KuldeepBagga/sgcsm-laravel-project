<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuestionAnswer extends Model
{
    protected $fillable = ['question_id', 'answer', 'correct_answer'];

    public function question()
    {
        return $this->belongsTo(Question::class, 'question_id');
    }
}
