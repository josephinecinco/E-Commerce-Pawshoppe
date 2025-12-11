<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Seed only your ecommerce products
        $this->call(EcommerceProductSeeder::class);
    }
}
