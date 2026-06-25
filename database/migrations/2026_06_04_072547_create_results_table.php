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
        Schema::create('results', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('result_details_id');
            $table->foreign('result_details_id')->references('id')->on('result_details')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('subject');
            $table->string('min_marks');
            $table->string('max_marks');
            $table->string('obtained_marks');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('results');
    }
};
