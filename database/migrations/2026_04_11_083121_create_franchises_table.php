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
        Schema::create('franchises', function (Blueprint $table) {
            $table->id();
            $table->string('center_name')->unique('center_name');
            $table->string('director')->nullable();
            $table->string('state')->nullable();
            $table->string('city')->nullable();
            $table->string('district')->nullable();
            $table->integer('pin')->nullable();
            $table->string('email')->unique();
            $table->integer('phone')->nullable();
            $table->integer('mobile')->unique();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('franchises');
    }
};
