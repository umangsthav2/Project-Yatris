<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('guides', function (Blueprint $table)
            {
                $table->id('unique_id');
                $table->string('name');
                $table->string('username');
                $table->string('email');
                $table->string('phone');
                $table->string('citizenship_media')->nullable();
                $table->string('verification_license')->nullable();
                $table->integer('rating')->nullable();
                $table->string('language');
                $table->timestamps();
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('guides');
    }
};
