<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Users;
class UserController extends Controller
{
    // function findID($id){
    //     return Users::find($id);
    // }

    // function getData(){
    //     return Users::all();
    // }

    //if then else two function above
    public function userData($id=null){
        return $id ? Users::find($id) : Users::all();
    }
}
