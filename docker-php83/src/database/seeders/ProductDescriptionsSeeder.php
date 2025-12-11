<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductDescriptionsSeeder extends Seeder
{
    public function run()
    {
        $descriptions = [
            "Perfect Bistro Cat Food" => "Nutritious cat food made with high-quality ingredients for a balanced diet.",
            "Whiskas" => "Popular cat food packed with essential vitamins and minerals.",
            "Sheba" => "Delicious wet cat food with tender chunks and rich flavors.",
            "Royal Canin" => "Specialized cat food for specific breeds and dietary needs.",
            "Creamy Cat Treats" => "Soft and tasty treats your cat will love.",
            "Crumps Cat Food" => "Affordable and healthy option for everyday feeding.",
            "Daily Cat Food" => "Reliable daily nutrition for all adult cats.",
            "Kindful Brown Cat Food" => "Premium cat food with natural ingredients for optimal health.",
            "Kindful Violet Cat Food" => "Specially formulated for picky eaters with rich flavor.",
            "Oinkies Cat Treats" => "Fun and crunchy treats for rewarding your cat.",
            "Perfect Bistro Cat Food (Duplicate)" => "Nutritious cat food made with high-quality ingredients for a balanced diet.",
            "Spot Tango Cat Food" => "Wholesome cat food designed for active cats.",
            "Cat Collar" => "Durable and adjustable collar for cats of all sizes.",
            "Cat Cage" => "Spacious and safe cage for travel or temporary housing.",
            "Cat Carrier" => "Comfortable carrier for trips to the vet or travel.",
            "Cat Sofa" => "Elegant sofa designed for your cat’s comfort and style.",
            "Cat Bed" => "Soft and cozy bed to give your cat a perfect resting spot."
        ];

        foreach ($descriptions as $name => $desc) {
            DB::table('ecommerce_products')
                ->where('name', $name)
                ->update(['description' => $desc]);
        }
    }
}
