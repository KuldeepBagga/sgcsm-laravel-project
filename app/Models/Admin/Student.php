<?php

namespace App\Models\Admin;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Student extends Model
{
    protected $fillable = [
        'name',
        'relation',
        'father_name',
        'husband_name',
        'mother_name',
        'date_joined',
        'date_of_birth',
        'qualification',
        'center_code',
        'state',
        'district',
        'phone',
        'adhaar_no',
        'paid',
        'certificate_issued',
        'course_id',
        'scan',
        'image',
        'session_start',
        'session_end',
        'center_name',
        'institute_id',
        'student_id'
    ];

    // public function getDateOfBirthAttribute($value)
    // {
    //     return $value ? Carbon::parse($value)->format('d/m/Y') : null;
    // }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($student) {
            $student->registration_no = self::generateRegistrationNo();
        });

        static::creating(function ($student) {
            $student->certificate_no = self::generateCertificateNo();
        });
    }

    public static function generateRegistrationNo()
    {
        do {
            $last = self::whereNotNull('registration_no')
                ->orderBy('id', 'desc')
                ->first();

            $lastNumber = 0;

            if ($last && preg_match('/(\d{4})$/', $last->registration_no, $matches)) {
                $lastNumber = (int) $matches[1];
            }

            $number = $lastNumber + 1;

            $reg = 'SGCSM/'.'IND/'.str_pad($number, 4, '0', STR_PAD_LEFT);

        } while (self::where('registration_no', $reg)->exists());

        return $reg;
    }

    public static function generateCertificateNo()
    {
        do {
            $last = self::whereNotNull('certificate_no')
                ->orderBy('id', 'desc')
                ->first();

            $lastNumber = 0;

            if ($last && preg_match('/(\d{4})$/', $last->certificate_no, $matches)) {
                $lastNumber = (int) $matches[1];
            }

            $number = $lastNumber + 1;

            $cert = date('Y').str_pad($number, 4, '0', STR_PAD_LEFT);

        } while (self::where('certificate_no', $cert)->exists());

        return $cert;
    }

    public function course(): BelongsTo
    {
       return $this->belongsTo(Course::class, 'course_id', 'id');
    }
}
