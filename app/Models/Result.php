<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Result extends Model
{
    use SoftDeletes;
    protected $fillable = ['result_details_id', 'subject', 'min_marks', 'max_marks', 'obtained_marks'];
}
