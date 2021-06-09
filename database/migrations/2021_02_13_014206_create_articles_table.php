<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title', 30);
            $table->string('name', 30);
            $table->foreignId('user_id')
                ->nullable()
                ->constrained('users')
                ->onDelete('CASCADE')
                ->onUpdate('NO ACTION');
            $table->string('genre');
            $table->text('summary');
            $table->longText('description');
            $table->boolean('is_featured')->default(false);
            $table->string('image')->nullable();
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
        Schema::dropIfExists('articles');
    }
}
