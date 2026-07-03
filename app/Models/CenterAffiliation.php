<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CenterAffiliation extends Model
{
    use SoftDeletes;
    
    protected $fillable = [
        'certificate_number',
        'director',
        'center_name',
        'district',
        'issue_date',
        'expire_date',
        'status',
        'center_code',
    ];
}
