<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Certificate extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'certificate_number',
        'registration_no',
        'conducted_by',
        'duration',
        'grade',
        'issued_date',
        'certificate_type',
        //'course_type',
        //'show_marksheet',
        'typing_speed',
        'shorthand_speed',
        'accuracy',
        'certificate_image',
        'image',
        'status',
    ];

    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class, 'certificate_number', 'certificate_no');
    }
}
