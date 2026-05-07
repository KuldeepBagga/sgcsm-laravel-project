<?php

namespace App\Models\Admin;

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
}
