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
        Schema::create('inscription_requests', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idPharmacie');
            $table->foreign('idPharmacie')->references('id')->on('pharmacies')->onDelete('cascade')->onUpdate('cascade');
            $table->boolean('valid_pharmacie')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inscription_requests');
    }
};
