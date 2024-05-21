<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Food;
class FoodController extends Controller
{
    public function foodList($id=null){
        return $id ? Food::find($id) : Food::all();
    }

    function addFood(Request $req)
    {

        $food = new Food();
        $food->name = $req->input('Name');
        $food->price = $req->input('Price');
        $food->description = $req->input('Description');
        $image = $req->file('Image');
        $imagePath = $image->store('food', 'public');
        $food->image = Storage::url($imagePath);

        $food->categoryId = $req->input('CategoryId');
        $result = $food->save();

        if ($result) {
            return $req->all();
        } else {
            return ["Result" => "Operation failed"];
        }
    }

    public function updateFood(Request $request, $id)
    {
        $food = Food::find($id);

        if (!$food) {
            return response()->json(['message' => 'Food not found'], 404);
        }

        // Kiểm tra và cập nhật các trường thông tin của món ăn
        if ($request->has('Name')) {
            $food->Name = $request->input('Name');
        }
        if ($request->has('Price')) {
            $food->Price = $request->input('Price');
        }
        if ($request->has('Description')) {
            $food->Description = $request->input('Description');
        }
        if ($request->has('CategoryId')) {
            $food->CategoryId = $request->input('CategoryId');
        }
        if ($request->hasFile('Image')) {
            $Image = $request->file('Image');
            $imagePath = $Image->store('food', 'public');
            $food->Image = Storage::url($imagePath);
        }

        // Lưu món ăn đã cập nhật
        $food->save();

        // Trả về thông tin món ăn đã cập nhật trong định dạng JSON
        return response()->json(['message' => 'Food updated successfully', 'food' => $food], 200);
    }
    function removeFood($foodId) {
        // Kiểm tra xem món ăn có tồn tại hay không trước khi xóa
        $food = Food::find($foodId);
        if (!$food) {
            return ["Result" => "Food not found"];
        }

        // Thực hiện xóa món ăn
        $result = $food->delete();
        if ($result) {
            return ["Result" => "Food deleted successfully"];
        } else {
            return ["Result" => "Failed to delete food"];
        }
    }

    function searchFood($name){
        return Food::where("name",$name)->get();
    }
}
