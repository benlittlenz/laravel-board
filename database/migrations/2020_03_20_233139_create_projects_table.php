<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('company_id')->nullable();
            $table->string('title');
            $table->text('description');
            $table->timestamps();

            // $table->foreign('company_id')
            //     ->references('id')
            //     ->on('companies')
            //     ->onDelete('cascade');
        });

        Schema::create('project_user', function (Blueprint $table) {
            $table->unsignedInteger('project_id');
            $table->unsignedInteger('user_id');
            $table->primary(['project_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
        Schema::dropIfExists('project_user');
    }
}
