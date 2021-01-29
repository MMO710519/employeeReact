<?php

namespace Database\Seeders;

use App\Models\Employee;
use Illuminate\Database\Seeder;

class EmployeesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $employees = factory(App\Employee::class, 50)->create();
        // EmployeesSeeder::factory()->count(50)->create();
        \App\Models\Employee::factory(50)->create();
    }
}
