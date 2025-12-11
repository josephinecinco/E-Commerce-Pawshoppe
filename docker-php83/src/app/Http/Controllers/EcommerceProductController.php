<?php

namespace App\Http\Controllers;

use App\Models\EcommerceProduct;
use Illuminate\Http\Request;

class EcommerceProductController extends Controller
{
    // Get all products
   public function index()
{
    $products = EcommerceProduct::all();

    foreach ($products as $product) {
        $product->image_full_url = $product->image_url
            ? asset('images/products/' . $product->image_url)
            : null;
    }

    return response()->json($products);
}


    // Get single product
   public function show($id)
{
    $product = EcommerceProduct::findOrFail($id);

    // Build the full image URL
    $product->image_full_url = $product->image_url 
        ? asset('images/products/' . $product->image_url)
        : null;

    return response()->json($product);
}


    // Store product
public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string',
        'category' => 'required|string',
        'price' => 'required|numeric',
        'stock' => 'required|integer',
        'image_url' => 'required|string',
        'description' => 'nullable|string',
    ]);

    $product = EcommerceProduct::create($validated);

    return response()->json($product, 201);
}

    // Update product
   public function update(Request $request, $id)
{
    $product = EcommerceProduct::find($id);

    if (!$product) {
        return response()->json(['message' => 'Product not found'], 404);
    }

    $product->name = $request->name;
    $product->category = $request->category;
    $product->price = $request->price;
    $product->stock = $request->stock;
    $product->image_url = $request->image_url;
    $product->description = $request->description; // if you added this

    $product->save();

    // Return the updated product
    return response()->json($product);
}

 public function destroy($id)
{
    $product = EcommerceProduct::find($id); // your model
    if (!$product) {
        return response()->json(['message' => 'Product not found'], 404);
    }

    $product->delete();
    return response()->json(['message' => 'Product deleted successfully'], 200);
}


}
