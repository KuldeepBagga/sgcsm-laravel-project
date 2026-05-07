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
        Schema::create('payment_records', function (Blueprint $table) {
            $table->id();
            $table->string('transaction_no')->unique();
            $table->date('transaction_date')->nullable();
            $table->integer('amount')->nullable();
            $table->string('status')->nullable();
            $table->string('center_code')->nullable();
            //$table->string('center_name')->nullable();
            $table->text('message')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payment_records');
    }
};
