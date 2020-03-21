<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->timestamps();
            $table->increments('id');
            //$table->integer('company_id')->nullable();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->rememberToken();

            // $table->foreign('company_id')
            //     ->references('id')
            //     ->on('company')
            //     ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
