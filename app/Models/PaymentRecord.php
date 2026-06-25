<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PaymentRecord extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'transaction_no',
        'transaction_date',
        'amount',
        'status',
        'center_code',
        //    'center_name', 
        'message'
    ];

    public function institute()
    {
        return $this->belongsTo(
            Institute::class,
            'center_code',
            'center_code'
        );
    }
}
