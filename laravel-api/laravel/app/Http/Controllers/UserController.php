<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Table;
use Illuminate\Http\Request;
use App\Models\Users;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{

    public function userData($id=null){
        return $id ? Users::find($id) : Users::all();
    }

    //tables
    public function viewTable($id=null){
        return $id ? Table::find($id) : Table::all();
    }
    public function addTable(Request $req){
        $table = new Table();
        $table->name = $req ->input('name');

        // $image = $req->file('qrCode');
        // $imagePath = $image->store('table', 'public');
        // $table->qrCode = Storage::url($imagePath);

        $result = $table->save();
        if($result){
            return $req->all();
        }else{
            return ["Result" => "Operation failed"];
        }
    } public function updateTable(Request $request, $id)
    {
        $table = Table::find($id);

        if (!$table) {
            return response()->json(['message' => 'Table not found'], 404);
        }
        if ($request->has('name')) {
            $table->name = $request->input('name');
        }
        // if ($request->hasFile('qrCode')) {
        //     $image = $request->file('qrCode');
        //     $imagePath = $image->store('table', 'public');
        //     $table->qrCode = Storage::url($imagePath);
        // }
        $table->save();
        return response()->json(['message' => 'Table updated successfully', 'table' => $table], 200);
    }


    public function removeTable($id) {
        $table = Table::find($id);
        if (!$table) {
            return ["Result" => "Table not found"];
        }
        $result = $table->delete();
        if ($result) {
            return ["Result" => "Table deleted successfully"];
        } else {
            return ["Result" => "Failed to delete Table"];
        }
    }



}