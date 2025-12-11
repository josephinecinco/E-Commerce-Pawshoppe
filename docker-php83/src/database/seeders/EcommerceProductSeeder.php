<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\EcommerceProduct;

class EcommerceProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            [
                "name" => "Perfect Bistro Cat Food",
                "category" => "Food",
                "price" => 14.49,
                "stock" => 90,
                "image_url" => "PerfectBistro.png"
            ],
            [
                "name" => "Whiskas",
                "category" => "Food",
                "price" => 16.75,
                "stock" => 80,
                "image_url" => "Whiskas.png"
            ],
            [
                "name" => "Sheba",
                "category" => "Foods",
                "price" => 12.75,
                "stock" => 50,
                "image_url" => "Sheba.png"
            ],
            [
                "name" => "Royal Canin",
                "category" => "Foods",
                "price" => 18.50,
                "stock" => 40,
                "image_url" => "RoyalCanin.png"
            ],
            [
                "name" => "Creamy Cat Treats",
                "category" => "Foods",
                "price" => 8.99,
                "stock" => 60,
                "image_url" => "CreamyCatTreats.png"
            ],
            [
                "name" => "Crumps Cat Food",
                "category" => "Food",
                "price" => 13.50,
                "stock" => 70,
                "image_url" => "Crumps.png"
            ],
            [
                "name" => "Daily Cat Food",
                "category" => "Food",
                "price" => 14.25,
                "stock" => 65,
                "image_url" => "Dailay.png"
            ],
            [
                "name" => "Kindful Brown Cat Food",
                "category" => "Food",
                "price" => 16.00,
                "stock" => 55,
                "image_url" => "KindfulBrown.png"
            ],
            [
                "name" => "Kindful Violet Cat Food",
                "category" => "Food",
                "price" => 16.50,
                "stock" => 50,
                "image_url" => "KindfullViolet.png"
            ],
            [
                "name" => "Oinkies Cat Treats",
                "category" => "Treats",
                "price" => 9.99,
                "stock" => 100,
                "image_url" => "Oinkies.png"
            ],
            [
                "name" => "Perfect Bistro Cat Food (Duplicate)",
                "category" => "Food",
                "price" => 14.49,
                "stock" => 90,
                "image_url" => "PerfectBistro.png"
            ],
            [
                "name" => "Spot Tango Cat Food",
                "category" => "Food",
                "price" => 15.25,
                "stock" => 75,
                "image_url" => "SpotTango.png"
            ],
            [
                "name" => "Cat Collar",
                "category" => "Accessories",
                "price" => 5.99,
                "stock" => 150,
                "image_url" => "Collar.png"
            ],
            [
                "name" => "Cat Cage",
                "category" => "Accessories",
                "price" => 45.00,
                "stock" => 20,
                "image_url" => "Cage.png"
            ],
            [
                "name" => "Cat Carrier",
                "category" => "Accessories",
                "price" => 30.00,
                "stock" => 35,
                "image_url" => "Carrier.png"
            ],
            [
                "name" => "Cat Sofa",
                "category" => "Furniture",
                "price" => 60.00,
                "stock" => 15,
                "image_url" => "Sofa.png"
            ],
            [
                "name" => "Cat Bed",
                "category" => "Furniture",
                "price" => 50.00,
                "stock" => 25,
                "image_url" => "Bed.png"
            ]
        ];

        foreach ($products as $product) {
            EcommerceProduct::create($product);
        }
    }
}
