<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Models\Category;
use Illuminate\Http\Request;
class FoodCategoryController extends Controller
{
    public function foodCategory($id=null){
        return $id ? Category::find($id) : Category::all();
    }
    public function updateCategory(Request $request, $id)
    {
        $category = Category::find($id);

        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        // Kiểm tra và cập nhật các trường thông tin của món ăn
        if ($request->has('name')) {
            $category->name = $request->input('name');
        }
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imagePath = $image->store('category', 'public');
            $category->image = Storage::url($imagePath);
        }

        // Lưu món ăn đã cập nhật
        $category->save();
        return response()->json(['message' => 'Category updated successfully', 'category' => $category], 200);
    }

}