<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Franchise extends Model
{
    use SoftDeletes;
    
    protected $fillable = [
        'center_name',
        'director',
        'state',
        'city',
        'district',
        'pin',
        'email',
        'phone',
        'mobile',
        'is_approved'
    ];
}
