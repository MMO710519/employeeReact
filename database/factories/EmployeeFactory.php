<?php

namespace Database\Factories;

use App\Models\Employee;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class EmployeeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Employee::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'=>$this->faker->name,
            'email'=>$this->faker->unique()->safeEmail,
            'birth'=>$this->faker->dateTimeBetween('-80 years', '-20years')->format('Y-m-d'),
            'address'=>$this->faker->unique()->address,
            'dependents'=>$this->faker->randomNumber(1),
            'department'=>$this->faker->numberBetween(1,5),
            'remember_token' => Str::random(10),
        ];
    }
}
