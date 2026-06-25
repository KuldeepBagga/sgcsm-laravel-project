<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CenterAffiliation extends Model
{
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
