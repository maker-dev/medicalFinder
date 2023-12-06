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
        Schema::create('gestion_medicines', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idPharmacie');
            $table->foreign('idPharmacie')->references('id')->on('pharmacies')
            ->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedBigInteger('idMedicine');
            $table->foreign('idMedicine')->references('id')
            ->on('medicines')->onDelete('cascade')->onUpdate('cascade');
            $table->bigInteger('quantiteProduit');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gestion_medicines');
    }
};
