<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\User;

class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->name,
            'name' => $this->faker->name,
            'user_id' => User::all()->random()->id,
            'genre' => $this->faker->name,
            'summary' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'is_featured' => $this->faker->boolean,
        ];
    }
}
