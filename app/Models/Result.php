<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    protected $fillable = ['result_details_id', 'subject', 'min_marks', 'max_marks', 'obtained_marks'];
}
