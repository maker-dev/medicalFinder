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
        Schema::create('medicines', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->double('price')->unsigned()->default(0);
            $table->unsignedBigInteger('idGestionMedicine');
            $table->foreign('idGestionMedicine')->references('id')
            ->on('gestion_medicines')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')
            ->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->longText('description');
            $table->string('image');
            $table->string('category');
            

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medicines');
    }
};
