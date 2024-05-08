<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Food;
class FoodController extends Controller
{
    public function foodList($id=null){
        return $id ? Food::find($id) : Food::all();
    }


}