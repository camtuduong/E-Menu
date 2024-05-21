<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
class FoodCategoryController extends Controller
{
    public function foodCategory($id=null){
        return $id ? Category::find($id) : Category::all();
    }

}