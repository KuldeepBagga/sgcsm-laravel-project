<?php

namespace App;

use App\Models\AssignExam;
use App\Models\ExamRegistration;
use App\Models\Student;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Intervention\Image\Alignment;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Format;
use Intervention\Image\Geometry\Factories\LineFactory;
use Intervention\Image\ImageManager;
use Intervention\Image\Laravel\Facades\Image;
use Intervention\Image\Typography\FontFactory;

trait Printables
{
    public function show_duplicate_online_result($id)
    {
        abort_if(!$id, 404);
        $students = Student::with([
            'course',
            'institute',
            'result_details' => function ($query) use ($id) {
                $query->where('id', $id)
                    ->where('status', 'ACTIVE')
                    ->with('result');
            }
        ])
            ->whereHas('result_details', function ($query) use ($id) {
                $query->where('id', $id)
                    ->where('status', 'ACTIVE');
            })
            ->get();
        return $students;
    }

    public static function generate_diploma($students)
    {
        $manager = ImageManager::usingDriver(Driver::class);

        $image = $manager->decode(storage_path('app/public/' . $students->certificate->certificate_image))->scale(width: 660, height: 1000);

        if ($students->image) {
            $studentPhoto = $manager->decode(storage_path('app/public/' . $students->image))->resize(height: 80, width: 80);
            $image->insert($studentPhoto, 60, 220, Alignment::TOP_LEFT, 1);
        }

        $qr_code = $manager->decode(storage_path("app/public/{$students->qr_code}"))->scale(70, 70);
        $image->insert($qr_code, 180, 60, Alignment::BOTTOM_LEFT, 1);

        $image->text('Certificate No:-' . $students->certificate->certificate_number, 630, 240, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::TOP_RIGHT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        if ($students->relation === 'W/O') {
            $name = strtoupper($students->name . " " . $students->relation . " " . $students->hunband_name);
        } else {
            $name = strtoupper($students->name . " " . $students->relation . " " . $students->father_name);
        }

        $image->text($name, $image->width() / 2, 340, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        })->drawLine(function (LineFactory $line): void {
            $line->color('#000');
            $line->from(100, 350);
            $line->to(600, 350);
        });

        $image->text('Attended The', $image->width() / 2, 375, function (FontFactory $font) {
            $font->size(17);
            $font->color('red');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        $image->text(strtoupper($students->course->name), $image->width() / 2, 400, function (FontFactory $font) {
            $font->size(17);
            $font->color('black');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        })->drawLine(function (LineFactory $line): void {
            $line->color('#000');
            $line->from(100, 410);
            $line->to(600, 410);
        });

        $image->text('Course Duration', $image->width() / 2, 435, function (FontFactory $font) {
            $font->size(17);
            $font->color('red');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        $image->text($students->certificate->duration, $image->width() / 2, 460, function (FontFactory $font) {
            $font->size(17);
            $font->color('black');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        })->drawLine(function (LineFactory $line): void {
            $line->color('#000');
            $line->from(100, 470);
            $line->to(600, 470);
        });

        $image->text('Conducted By', $image->width() / 2, 495, function (FontFactory $font) {
            $font->size(17);
            $font->color('red');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        $image->text('SANJAY GANDHI COMPUTER SAKSHARTA MISSION', $image->width() / 2, 520, function (FontFactory $font) {
            $font->size(17);
            $font->color('black');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        })->drawLine(function (LineFactory $line): void {
            $line->color('#000');
            $line->from(100, 530);
            $line->to(600, 530);
        });

        $image->text('With Grade "' . $students->certificate->grade . '" and has been awarded the diploma', $image->width() / 2, 560, function (FontFactory $font) {
            $font->size(17);
            $font->color('black');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        })
            ->drawLine(function (LineFactory $line): void {
                $line->color('#000');
                $line->from(100, 570);
                $line->to(600, 570);
            });

        $image->text('Date of Birth : ' . date('d/m/Y', strtotime($students->date_of_birth)), 60, 640, function (FontFactory $font) {
            $font->size(17);
            $font->color('black');
            $font->align(Alignment::BOTTOM_LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        $image->text('Enrollment No : ' . $students->registration_no, 60, 670, function (FontFactory $font) {
            $font->size(17);
            $font->color('black');
            $font->align(Alignment::BOTTOM_LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        $image->text('Date of Issue : ' . date('d/m/Y', strtotime($students->certificate->issued_date)), 60, 696, function (FontFactory $font) {
            $font->size(17);
            $font->color('black');
            $font->align(Alignment::BOTTOM_LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        $image->text('ASC Name : ' . $students->institute->center_name, 60, 722, function (FontFactory $font) {
            $font->size(17);
            $font->color('black');
            $font->align(Alignment::BOTTOM_LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        Storage::disk('public')->put(
            "uploads/certificates/$students->certificate_no.jpg",
            (string) $image->encodeUsingFileExtension('jpg', quality: 90)
        );

        echo '<img src="' .  asset('storage/uploads/certificates/' . $students->certificate_no . ".jpg")  . '" style="display:block;margin:0 auto;">';
    }

    public static function generate_certificate($students)
    {
        $manager = ImageManager::usingDriver(Driver::class);

        $image = $manager->decode(storage_path('app/public/' . $students->certificate->certificate_image))->scale(width: 900);

        $studentPhoto = $manager->decode(storage_path("app/public/{$students->image}"))->resize(height: 80, width: 80);
        $image->insert($studentPhoto, 150, 190, Alignment::TOP_RIGHT, 1);

        $qr_code = $manager->decode(storage_path("app/public/{$students->qr_code}"))->scale(70, 70);
        $image->insert($qr_code, 35, 30, Alignment::BOTTOM_LEFT, 1);

        $image->text('Certificate No:-' . $students->certificate_no, 70, 240, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::TOP_LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        $image->text('This is certify that Mr./Mrs./Smt.', 70, 300, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        $image->text(strtoupper($students->name), 390, 300, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        })->drawLine(function (LineFactory $line): void {
            $line->color("#000");
            $line->from(390, 309);
            $line->to(750, 309);
        });


        $image->text('S/O, D/O, W/O', 70, 330, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        $image->text($students->relation === 'W/O' ? strtoupper($students->husband_name) : strtoupper($students->father_name), 390, 330, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        })->drawLine(function (LineFactory $line): void {
            $line->color("#000");
            $line->from(390, 339);
            $line->to(750, 339);
        });

        $image->text('Has Successfully Completed The Course', 70, 360, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        $image->text(strtoupper($students->course->name), 390, 360, function (FontFactory $font) {
            $font->size(15);
            $font->color('#000');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        })->drawLine(function (LineFactory $line): void {
            $line->color("#000");
            $line->from(390, 369);
            $line->to(750, 369);
        });

        $image->text('From A.S.C Center', 70, 390, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        $image->text(strtoupper($students->institute->center_name), 230, 390, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        })->drawLine(function (LineFactory $line): void {
            $line->color("#000");
            $line->from(230, 399);
            $line->to(750, 399);
        });

        $image->text('During The Period', 70, 420, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        $image->text($students->certificate->duration, 230, 420, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        })->drawLine(function (LineFactory $line): void {
            $line->color("#000");
            $line->from(230, 429);
            $line->to(750, 429);
        });

        $image->text('Grade :', 600, 420, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        $image->text($students->certificate->grade, 660, 420, function (FontFactory $font) {
            $font->size(17);
            $font->color('red');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        $image->text('Enrollment No :', 70, 450, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        $image->text($students->registration_no, 230, 450, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        })->drawLine(function (LineFactory $line): void {
            $line->color("#000");
            $line->from(230, 459);
            $line->to(400, 459);
        });


        $image->text('D.O.B :', 420, 450, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        $image->text(date('d/m/Y', strtotime($students->date_of_birth)), 480, 450, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        })->drawLine(function (LineFactory $line): void {
            $line->color("#000");
            $line->from(480, 459);
            $line->to(570, 459);
        });

        $image->text('Center Code :', 580, 450, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        $image->text($students->institute->center_code, 685, 450, function (FontFactory $font) {
            $font->size(17);
            $font->color('red');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        })->drawLine(function (LineFactory $line): void {
            $line->color("#000");
            $line->from(685, 459);
            $line->to(750, 459);
        });

        $image->text('Date of Issue :', 70, 480, function (FontFactory $font) {
            $font->size(17);
            $font->color('#000');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        });

        $image->text(date('d/m/Y', strtotime($students->certificate->issued_date)), 230, 480, function (FontFactory $font) {
            $font->size(17);
            $font->color('black');
            $font->align(Alignment::LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Medium.ttf'));
        })->drawLine(function (LineFactory $line): void {
            $line->color("#000");
            $line->from(230, 489);
            $line->to(400, 489);
        });

        Storage::disk('public')->put(
            "uploads/certificates/$students->certificate_no.jpg",
            (string) $image->encodeUsingFileExtension('jpg', quality: 90)
        );

        echo '<img src="' . asset('storage/uploads/certificates/' . $students->certificate_no . ".jpg") . '" style="display:block;margin:0 auto;">';
    }

    public static function generate_original_marksheet($id)
    {
        abort_if(!$id, 404, 'Invalid result id.');

        $students = Student::with([
            'course',
            'institute',
            'result_details' => function ($query) use ($id) {
                $query->where('id', $id)
                    ->where('status', 'ACTIVE')
                    ->with('result');
            }
        ])
            ->whereHas('result_details', function ($query) use ($id) {
                $query->where('id', $id)
                    ->where('status', 'ACTIVE');
            })
            ->first();

        $marksObtained = $students->result_details->reduce(function ($carry, $resultDetail) {
            return $carry + $resultDetail->result->sum('obtained_marks');
        }, 0);

        $maxMarks = $students->result_details->reduce(function ($carry, $resultDetail) {
            return $carry + $resultDetail->result->sum('max_marks');
        }, 0);

        $minMarks = $students->result_details->reduce(function ($carry, $resultDetail) {
            return $carry + $resultDetail->result->sum('min_marks');
        }, 0);

        abort_if(!$students, 404, 'Student not found.');

        abort_if(!$students->course, 404, 'Course not found.');

        abort_if(!$students->institute, 404, 'Institute not found.');

        abort_if($students->result_details->isEmpty(), 404, 'Result details not found.');

        $resultDetail = $students->result_details->first();

        abort_if(!$resultDetail, 404, 'Result detail not found.');

        abort_if($resultDetail->result->isEmpty(), 404, 'Subjects not found.');

        abort_if($maxMarks <= 0, 500, 'Maximum marks cannot be zero.');

        $percentage = $maxMarks > 0 ? round(($marksObtained / $maxMarks) * 100, 2) : 0;

        if ($percentage >= 80) {
            $grade = 'A+';
            $division = "1st DIVISION";
        } elseif ($percentage >= 70) {
            $grade = 'A';
            $division = "1st DIVISION";
        } elseif ($percentage >= 60) {
            $grade = 'B+';
            $division = "2nd DIVISION";
        } elseif ($percentage >= 50) {
            $grade = 'B';
            $division = "2nd DIVISION";
        } elseif ($percentage >= 40) {
            $grade = 'C';
            $division = "3rd DIVISION";
        } else {
            $grade = 'FAIL';
            $division = "N/A";
        }


        $manager = ImageManager::usingDriver(Driver::class);

        abort_unless(
            Storage::disk('public')->exists($resultDetail->original_marksheet),
            404,
            'Original marksheet image not found.'
        );

        $image = $manager->decode(storage_path('app/public/' . $students->result_details[0]->original_marksheet))->scale(width: 690);


        abort_unless(
            Storage::disk('public')->exists($students->qr_code),
            404,
            'QR code image not found.'
        );

        $qr_code = $manager->decode(storage_path("app/public/{$students->qr_code}"))->scale(70, 70);
        $image->insert($qr_code, 65, 50, Alignment::BOTTOM_LEFT, 1);

        $image->drawLine(function (LineFactory $line) {
            $line->color('#000');
            $line->from(685, 360);
            $line->to(60, 360);
        });

        $image->drawLine(function (LineFactory $line) {
            $line->color('#000');
            $line->from(685, 740);
            $line->to(60, 740);
        });

        $image->drawLine(function (LineFactory $line) {
            $line->color('#000');
            $line->from(290, 770);
            $line->to(60, 770);
        });

        $image->drawLine(function (LineFactory $line) {
            $line->color('#000');
            $line->from(685, 400);
            $line->to(60, 400);
        });

        $image->drawLine(function (LineFactory $line) {
            $line->color('#000');
            $line->from(600, 380);
            $line->to(450, 380);
        });

        $image->drawLine(function (LineFactory $line) {
            $line->color('#000');
            $line->from(685, 800);
            $line->to(60, 800);
        });


        $image->drawLine(function (LineFactory $line) {
            $line->color('#000');
            $line->from(685, 775);
            $line->to(600, 775);
        });


        $image->drawLine(function (LineFactory $line) {
            $line->color('#000');
            $line->from(685, 800);
            $line->to(685, 360);
        });

        $image->drawLine(function (LineFactory $line) {
            $line->color('#000');
            $line->from(60, 800);
            $line->to(60, 360);
        });

        $image->drawLine(function (LineFactory $line) {
            $line->color('#000');
            $line->from(225, 800);
            $line->to(225, 740);
        });

        $image->drawLine(function (LineFactory $line) {
            $line->color('#000');
            $line->from(290, 800);
            $line->to(290, 740);
        });

        $image->drawLine(function (LineFactory $line) {
            $line->color('#000');
            $line->from(450, 800);
            $line->to(450, 360);
        });

        $image->drawLine(function (LineFactory $line) {
            $line->color('#000');
            $line->from(525, 800);
            $line->to(525, 380);
        });

        $image->drawLine(function (LineFactory $line) {
            $line->color('#000');
            $line->from(600, 800);
            $line->to(600, 360);
        });

        $image->text("STUDENT NAME", 65, 250, function (FontFactory $font) {
            $font->size(14);
            $font->color('black');
            $font->align(Alignment::TOP_LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text(": " . strtoupper($students->name), 190, 250, function (FontFactory $font) {
            $font->size(14);
            $font->color('black');
            $font->align(Alignment::TOP_LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        if ($students->relation === 'W/O') {
            $label = "HUSBAND NAME";
            $relative_name = strtoupper($students->husband_name);
        } else {
            $label = "FATHER'S NAME";
            $relative_name = strtoupper($students->father_name);
        }

        $image->text($label, 65, 275, function (FontFactory $font) {
            $font->size(14);
            $font->color('black');
            $font->align(Alignment::TOP_LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text(": " . $relative_name, 190, 275, function (FontFactory $font) {
            $font->size(14);
            $font->color('black');
            $font->align(Alignment::TOP_LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text("A.S.C NAME", 65, 300, function (FontFactory $font) {
            $font->size(14);
            $font->color('black');
            $font->align(Alignment::TOP_LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text(": " . strtoupper($students->institute->center_name), 190, 300, function (FontFactory $font) {
            $font->size(14);
            $font->color('RED');
            $font->align(Alignment::TOP_LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text("COURSE", 65, 325, function (FontFactory $font) {
            $font->size(14);
            $font->color('black');
            $font->align(Alignment::TOP_LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text(": " . strtoupper($students->course->name), 190, 325, function (FontFactory $font) {
            $font->size(14);
            $font->color('BLACK');
            $font->align(Alignment::TOP_LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text("CENTER ADD", 65, 350, function (FontFactory $font) {
            $font->size(14);
            $font->color('black');
            $font->align(Alignment::TOP_LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text(": " . strtoupper($students->institute->address), 190, 350, function (FontFactory $font) {
            $font->size(14);
            $font->color('BLACK');
            $font->align(Alignment::TOP_LEFT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text("CENTER CODE", 552, 250, function (FontFactory $font) {
            $font->size(14);
            $font->color('black');
            $font->align(Alignment::TOP_RIGHT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text(": " . strtoupper($students->institute->center_code), 560, 250, function (FontFactory $font) {
            $font->size(14);
            $font->color('RED');
            //$font->align(Alignment::TOP_RIGHT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text("REGD NO.", 520, 270, function (FontFactory $font) {
            $font->size(14);
            $font->color('black');
            $font->align(Alignment::TOP_RIGHT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text("STATEMENT OF MARKS", 596, 375, function (FontFactory $font) {
            $font->size(12);
            $font->color('black');
            $font->align(Alignment::TOP_RIGHT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text(": " . $students->registration_no, 530, 270, function (FontFactory $font) {
            $font->size(14);
            $font->color('BLACK');
            //$font->align(Alignment::TOP_RIGHT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text("MAX", 550, 395, function (FontFactory $font) {
            $font->size(12);
            $font->color('BLACK');
            //$font->align(Alignment::TOP_RIGHT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text("MIN", 470, 395, function (FontFactory $font) {
            $font->size(12);
            $font->color('BLACK');
            //$font->align(Alignment::TOP_RIGHT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });



        $image->text($maxMarks, 545, 775, function (FontFactory $font) {
            $font->size(12);
            $font->color('BLACK');
            //$font->align(Alignment::TOP_RIGHT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text($minMarks, 470, 775, function (FontFactory $font) {
            $font->size(12);
            $font->color('BLACK');
            //$font->align(Alignment::TOP_RIGHT);
            $font->lineHeight(1.5);
            $font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text("MARKS OBTAINED", 645, 395, function (FontFactory $font) {
            $font->size(12);
            $font->color('BLACK');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            $font->wrap(50);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });


        $image->text($marksObtained, 645, 763, function (FontFactory $font) {
            $font->size(12);
            $font->color('BLACK');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            $font->wrap(50);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text("PAPER", 220, 385, function (FontFactory $font) {
            $font->size(12);
            $font->color('BLACK');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            $font->wrap(50);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text("DATE OF ISSUE : " . date('d/m/Y', strtotime($students->result_details[0]->result_date)), 138, 815, function (FontFactory $font) {
            $font->size(12);
            $font->color('RED');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            //$font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });


        $image->text("A - ABSENT, F - FAIL, G - PASS BY GRACE, S - ELIGIBLE", 525, 815, function (FontFactory $font) {
            $font->size(12);
            $font->color('BLACK');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            //$font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text("TOTAL MARKS OBTAINED", 142, 760, function (FontFactory $font) {
            $font->size(12);
            $font->color('BLACK');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            //$font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text("MAXIMUM MARKS", 120, 790, function (FontFactory $font) {
            $font->size(12);
            $font->color('BLACK');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            //$font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text($division, 643, 790, function (FontFactory $font) {
            $font->size(11);
            $font->color('BLACK');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            //$font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text("GRADE " . $grade, 355, 780, function (FontFactory $font) {
            $font->size(12);
            $font->color('BLACK');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            //$font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text($marksObtained, 255, 760, function (FontFactory $font) {
            $font->size(12);
            $font->color('BLACK');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            //$font->wrap(500);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $image->text($maxMarks, 255, 790, function (FontFactory $font) {
            $font->size(12);
            $font->color('BLACK');
            $font->align(Alignment::CENTER);
            $font->lineHeight(1.5);
            $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
        });

        $y = 415;

        foreach ($students->result_details[0]->result as $exam_result) {

            $subject = strtoupper($exam_result->subject);

            $image->text($subject, 65, $y, function (FontFactory $font) {
                $font->size(12);
                $font->wrap(480);
                $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
            });

            $image->text($exam_result->min_marks, 483, $y, function (FontFactory $font) {
                $font->size(12);
                $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
            });

            $image->text($exam_result->max_marks, 550, $y, function (FontFactory $font) {
                $font->size(12);
                $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
            });

            $image->text($exam_result->obtained_marks, 635, $y, function (FontFactory $font) {
                $font->size(12);
                $font->filename(storage_path('app/public/fonts/Spectral-Light.ttf'));
            });
            $lines = ceil(strlen($subject) / 30);
            $y += max(25, $lines * 18);
        }

        $filename = str_replace('/', '_', $students->registration_no);

        Storage::disk('public')->put(
            "uploads/marksheet/{$filename}.jpg",
            (string) $image->encodeUsingFileExtension('jpg', quality: 90)
        );

        echo '<img src="' . asset("storage/uploads/marksheet/{$filename}.jpg") . '") " style="display:block;margin:0 auto;">';
    }

    public static function print_icard($registration_no)
    {
        abort_if(!$registration_no, 404);
        $student = Student::with('institute', 'course')->where('registration_no', $registration_no)->first();
        abort_if(!$student, 404);
        return Inertia::render('Frontend/Card/Card', compact('student'));
    }

    public static function online_exam_admit_card($id)
    {
        $manager = ImageManager::usingDriver(Driver::class);
        $image = $manager->decode(storage_path('app/public/admin-card.jpg'))->scale(width: 660, height: 1000);

        $students = Student::with([
            'course',
            'institute',
        ])
            ->where('registration_no', $id)
            ->first();

        abort_if(!$students, 404);
        $assign_exam = ExamRegistration::where('user_id', $students->student_id)->first();
        //dd($assign_exam);
        abort_if(!$assign_exam, 404);


        if ($students->image) {
            $studentPhoto = $manager->decode(storage_path('app/public/' . $students->image))->resize(height: 95, width: 95);
            $image->insert($studentPhoto, 483, 190, Alignment::TOP_LEFT, 1);
        }

        $image->text($students->name, 190, 189, function (FontFactory $font) {
            $font->size(22);
            $font->color('BLACK');
            $font->filename(storage_path('app/public/fonts/Spectral-semibold.ttf'));
        });


        $image->text($students->father_name, 175, 222, function (FontFactory $font) {
            $font->size(22);
            $font->color('BLACK');
            $font->filename(storage_path('app/public/fonts/Spectral-semibold.ttf'));
        });


        $image->text($students->registration_no, 125, 255, function (FontFactory $font) {
            $font->size(22);
            $font->color('BLACK');
            $font->filename(storage_path('app/public/fonts/Spectral-semibold.ttf'));
        });


        $image->text($students->date_of_birth, 90, 289, function (FontFactory $font) {
            $font->size(22);
            $font->color('BLACK');
            $font->filename(storage_path('app/public/fonts/Spectral-semibold.ttf'));
        });

        $image->text('N/A', 140, 323, function (FontFactory $font) {
            $font->size(22);
            $font->color('BLACK');
            $font->filename(storage_path('app/public/fonts/Spectral-semibold.ttf'));
        });

        $image->text($students->course->name, 120, 357, function (FontFactory $font) {
            $font->size(22);
            $font->color('BLACK');
            $font->filename(storage_path('app/public/fonts/Spectral-semibold.ttf'));
        });

        $image->text($students->institute->center_name, 180, 397, function (FontFactory $font) {
            $font->size(22);
            $font->color('BLACK');
            $font->filename(storage_path('app/public/fonts/Spectral-semibold.ttf'));
        });

        $filename = str_replace('/', '_', $students->registration_no);

        Storage::disk('public')->put(
            "uploads/{$filename}-admit-card.jpg",
            (string) $image->encodeUsingFileExtension('jpg', quality: 90)
        );

        echo '<img src="' . asset("storage/uploads/{$filename}-admit-card.jpg") . '") " style="display:block;margin:0 auto;">';
    }
}
