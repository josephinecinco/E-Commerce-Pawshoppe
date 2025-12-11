<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class EcommerceProduct extends Model
{
    use HasFactory;

    protected $table = 'ecommerce_products';

    protected $fillable = [
    'name',
    'category',
    'price',
    'stock',
    'image_url',
    'description'
];

}
