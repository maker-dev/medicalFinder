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
            $table->string('title');
            $table->double('price')->unsigned()->default(0);
           
            $table->unsignedBigInteger('client_id');
            $table->foreign('client_id')->references('id')
            ->on('clients')->onDelete('cascade')->onUpdate('cascade');
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
