<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Spatie\Permission\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        Role::create(['name' => 'admin', 'guard_name' => 'web']);
        Role::create(['name' => 'student', 'guard_name' => 'web']);
        Role::create(['name' => 'franchise', 'guard_name' => 'web']);

        $admin =  User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make("1234")
        ]);

       $admin->assignRole('admin');

        $student =  User::factory()->create([
            'name' => 'student',
            'email' => 'student@gmail.com',
            'password' => Hash::make("1234")
        ]);
        
        $student->assignRole('student');

        $franchise =    User::factory()->create([
            'name' => 'franchise',
            'email' => 'franchise@gmail.com',
            'password' => Hash::make("1234")
        ]);

        $franchise->assignRole('franchise');
    }
}
