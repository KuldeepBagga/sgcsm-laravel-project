<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Institute extends Model
{
    use SoftDeletes;
    
    protected $fillable = [
        'center_code',
        'center_name',
        'email',
        'address',
        'city',
        'state',
        'pin',
        'district',
        'mobile',
        'phone',
        'director',
        'authorization',
        'status',
        'reference',
        'authorized',
        'image',
        'user_id'
    ];
}
