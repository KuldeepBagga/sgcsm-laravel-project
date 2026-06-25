<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TopInstitute extends Model
{
    protected $fillable = ['institute_id', 'rank'];

    public function institute(): BelongsTo
    {
        return $this->belongsTo(Institute::class, 'institute_id', 'id');
    }
}
