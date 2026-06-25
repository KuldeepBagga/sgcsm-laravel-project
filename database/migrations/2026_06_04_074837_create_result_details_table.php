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
        Schema::create('result_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('registration_no')->nullable();
            $table->foreign('registration_no')->references('registration_no')->on('students')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('duplicate_marksheet')->nullable(false);
            $table->string('original_marksheet')->nullable(false);
            $table->string('status')->nullable(false);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('result_details');
    }
};
