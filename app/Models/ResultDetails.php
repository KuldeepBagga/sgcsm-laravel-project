<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class ResultDetails extends Model
{
    use SoftDeletes;
    
    protected $fillable = ['registration_no', 'type', 'status', 'result_date', 'duplicate_marksheet', 'original_marksheet'];

    public function result()
    {
        return $this->hasMany(Result::class, 'result_details_id');
    }
}
