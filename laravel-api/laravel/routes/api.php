<?php

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
Route::get('/category/{id?}', [FoodCategoryController::class, 'foodCategory']);

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