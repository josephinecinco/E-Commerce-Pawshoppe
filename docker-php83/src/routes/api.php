<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EcommerceProductController;


Route::resource('products', EcommerceProductController::class);
Route::delete('/products/{id}', [EcommerceProductController::class, 'destroy']);
Route::put('/products/{id}', [EcommerceProductController::class, 'update']);
