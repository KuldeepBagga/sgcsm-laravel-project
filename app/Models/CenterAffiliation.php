<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
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

    public function institute(): BelongsTo
    {
        return $this->belongsTo(Institute::class, 'center_code', 'center_code');
    }
}
