<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('parent')->nullable();
            $table->integer('level')->default(1)->nullable();
            $table->string('text');
            $table->string('link')->default('#')->nullable();
            $table->string('icon')->nullable();
            $table->string('class')->nullable();
            $table->text('attr')->nullable();
            $table->integer('active')->default(1);
            $table->string('role')->nullable();
            $table->string('permission')->nullable();
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
        Schema::dropIfExists('menus');
    }
}
