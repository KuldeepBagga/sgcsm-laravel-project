<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
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

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function students()
    {
        return $this->hasMany(Student::class);
    }

    public function paymentRecords()
    {
        return $this->hasMany(
            PaymentRecord::class,
            'center_code',
            'center_code'
        );
    }
}
