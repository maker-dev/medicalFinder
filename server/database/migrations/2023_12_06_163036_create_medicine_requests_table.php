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
        Schema::create('medicine_requests', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->double('price')->unsigned()->default(0);
           
            $table->unsignedBigInteger('pharmacie_id');
            $table->foreign('pharmacie_id')->references('id')
            ->on('pharmacies')->onDelete('cascade')->onUpdate('cascade');
            $table->longText('description');
            $table->string('image');
            $table->string('category');
            $table->boolean('valid_requests')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medicine_requests');
    }
};
