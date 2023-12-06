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
        Schema::create('medicines_pharmacies', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pharmacy_id');
            $table->foreign('pharmacy_id')->references('id')
            ->on('pharmacies')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedBigInteger('medicine_id');
            $table->foreign('medicine_id')->references('id')
            ->on('medicines')->onDelete('cascade')->onUpdate('cascade');
            $table->double("price");
            $table->integer("quantity");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medicines_pharmacies');
    }
};
