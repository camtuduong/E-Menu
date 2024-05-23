<?php

use App\Http\Controllers\CartController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FoodController;
use App\Http\Controllers\FoodCategoryController;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Response;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
//make health check route
Route::get('/users/{id?}', [UserController::class, 'userData']);

//food api
Route::get('storage/food/{filename}', function ($filename) {
    $path = storage_path('app/public/food/' . $filename);

    if (!Storage::exists($path)) {
        return response()->json(['error' => 'File not found'], 404);
    }

    $file = Storage::get($path);
    $type = Storage::mimeType($path);

    return (new Response($file, 200))->header('Content-Type', $type);
});
//$table->dropUnique('users_email_unique');
Route::get('/food/{id?}', [FoodController::class, 'foodList']);
Route::post('/add-food', [FoodController::class, 'addFood']);
Route::put('/update-food/{id}', [FoodController::class, 'updateFood']);
Route::delete('/remove-food/{id}', [FoodController::class, 'removeFood']);
Route::get('search-food/{name}',[FoodController::class, 'searchFood']);
Route::get('search-food-categoryId/{categoryId}',[FoodController::class, 'searchFoodByCategory']);

//category api
Route::get('/category/{id?}', [FoodCategoryController::class, 'foodCategory']);
Route::put('/update-category/{id}', [FoodCategoryController::class, 'updateCategory']);


//cart
Route::get('/cart/{id?}', [CartController::class,'viewCart']);
Route::post('/add-cart/{itemId}', [CartController::class,'addToCart']);
Route::delete('/remove-cart/{itemId}', [CartController::class,'removeFromCart']);
Route::get('/search-cart/{itemId}', [CartController::class,'searchCart']);