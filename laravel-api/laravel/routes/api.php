<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FoodController;
use App\Http\Controllers\FoodCategoryController;
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
Route::get('/food/{id?}', [FoodController::class, 'foodList']);
Route::get('/category/{id?}', [FoodCategoryController::class, 'foodCategory']);

//$table->dropUnique('users_email_unique');