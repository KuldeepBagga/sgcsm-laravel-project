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
        Schema::create('center_affiliations', function (Blueprint $table) {
            $table->id();
            $table->string('certificate_number')->unique();
            $table->string('director')->nullable();
            $table->string('center_name')->nullable();
            $table->string('district')->nullable();
            $table->date('issue_date')->nullable();
            $table->date('expire_date')->nullable();
            $table->string('status')->nullable();
            $table->string('center_code')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('center_affiliations');
    }
};
