<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class Institute extends Model
{
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
