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
        Schema::create('certificates', function (Blueprint $table) {
            $table->id();

            //$table->string('certificate_number')->unique();
            $table->unsignedBigInteger('certificate_number')->nullable();
            $table->foreign('certificate_number')->references('certificate_no')->on('students')->nullOnDelete();

            //$table->string('registration_no')->unique();

            $table->unsignedBigInteger('registration_no')->nullable();
            $table->foreign('registration_no')->references('registration_no')->on('students')->nullOnDelete();

            $table->string('conducted_by');
            $table->string('duration');
            $table->string('grade');
            $table->string('issued_date');
            $table->string('certificate_type');
            //$table->string('course_type');
            //$table->string('show_marksheet');
            $table->string('typing_speed')->nullable();
            $table->string('shorthand_speed')->nullable();
            $table->string('accuracy')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('certificates');
    }
};
