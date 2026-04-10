<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('relation');
            $table->string('father_name');
            $table->string('mother_name');

            $table->date('date_joined');
            $table->date('date_of_birth');

            $table->string('qualification');

            $table->string('center_code');

            $table->string('state');
            $table->string('district');

            $table->string('phone', 15);
            $table->string('adhaar_no', 20)->nullable();

            $table->string('paid')->nullable();

            $table->string('certificate_issued')->nullable();

            $table->unsignedBigInteger('course_id')->nullable();
            $table->foreign('course_id')->references('id')->on('courses')->nullOnDelete();

            $table->unsignedBigInteger('institute_id')->nullable();
            $table->foreign('institute_id')->references('id')->on('institutes')->nullOnDelete();

            $table->unsignedBigInteger('student_id')->nullable();
            $table->foreign('student_id')->references('id')->on('users')->nullOnDelete();

            $table->string('scan')->nullable();
            $table->string('image')->nullable();

            $table->date('session_start')->nullable();
            $table->date('session_end')->nullable();

            $table->string('registration_no')->unique();
            $table->string('certificate_no')->unique()->nullable();

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
