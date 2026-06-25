<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use LDAP\Result;

class Student extends Model
{
    use SoftDeletes;

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
        'student_id',
        'qr_code'
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
            $last = self::withTrashed()
                ->whereNotNull('registration_no')
                ->orderBy('id', 'desc')
                ->first();

            $lastNumber = 0;

            if ($last && preg_match('/(\d{4})$/', $last->registration_no, $matches)) {
                $lastNumber = (int) $matches[1];
            }

            $number = $lastNumber + 1;

            $reg = 'SGCSM/' . 'IND/' . str_pad($number, 4, '0', STR_PAD_LEFT);
        } while (self::where('registration_no', $reg)->exists());

        return $reg;
    }

    public static function generateCertificateNo()
    {
        do {
            $last = self::withTrashed() // Include soft deleted records
                ->whereNotNull('certificate_no')
                ->orderBy('id', 'desc')
                ->first();

            $lastNumber = 0;

            if ($last && preg_match('/(\d{4})$/', $last->certificate_no, $matches)) {
                $lastNumber = (int) $matches[1];
            }

            $number = $lastNumber + 1;

            $cert = date('Y') . str_pad($number, 4, '0', STR_PAD_LEFT);
        } while (
            self::withTrashed()
            ->where('certificate_no', $cert)
            ->exists()
        );

        return $cert;
    }

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class, 'course_id', 'id');
    }

    public function institute()
    {
        return $this->belongsTo(Institute::class);
    }

    public function result_details()
    {
        return $this->hasMany(ResultDetails::class, 'registration_no', 'registration_no');
    }

    public function certificate()
    {
        return $this->belongsTo(Certificate::class, 'certificate_no', 'certificate_number');
    }
}
