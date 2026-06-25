<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ResultDetails extends Model
{
    protected $fillable = ['registration_no', 'type', 'status', 'result_date', 'duplicate_marksheet', 'original_marksheet'];

    public function result()
    {
        return $this->hasMany(Result::class, 'result_details_id');
    }
}
