<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pharmacy>
 */
class PharmacyFactory extends Factory
{
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
                'name' => fake()->name(),
                'description' => fake()->sentences(5, true),
                'opening_time' => fake()->time(),
                'closing_time' => fake()->time(),
                'phone' => fake()->phoneNumber(),
                'address' => fake()->address(),
                'city' => fake()->city(),
                'location' => ['latitude' => fake()->latitude(), 'longitude' => fake()->longitude()],
                'image' => null,
                'verified' => fake()->boolean(),
                'permanence' => fake()->boolean()
        ];
    }
}
