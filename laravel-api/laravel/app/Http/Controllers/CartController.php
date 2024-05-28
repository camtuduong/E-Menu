<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Carts;
use App\Models\Food;

use Illuminate\Http\Request;

class CartController extends Controller
{
    public function viewCart($id=null){
        return $id ? Carts::find($id) : Carts::all();
    }
    public function addToCart(Request $request, $itemId)
    {
        // Tìm sản phẩm theo itemId trong mô hình Food
        $food = Food::find($itemId);

        if ($food) {
            // Sản phẩm tồn tại trong mô hình Food
            $existingCart = Carts::where('item_id', $itemId)->first();

            if ($existingCart) {
                // Sản phẩm đã tồn tại trong giỏ hàng
                $existingCart->quantity += 1;
                $existingCart->save();

                return response()->json(['message' => 'Product quantity updated in cart'], 200);
            } else {
                // Sản phẩm chưa tồn tại trong giỏ hàng, thêm mới
                $cart = new Carts();
                $cart->item_id = $itemId;

                // Lấy giá của sản phẩm từ mô hình Food
                $price = $food->Price;
                $cart->price = $price;

                $cart->quantity = 1;
                $cart->save();

                return response()->json(['message' => 'Product added to cart'], 200);
            }
        } else {
            // Không tìm thấy sản phẩm với itemId trong mô hình Food
            return response()->json(['message' => 'Invalid itemId'], 404);
        }
    }

    public function removeFromCart($itemId)
    {
        $cart = Carts::where('item_id', $itemId)->first();
        if ($cart) {
            if ($cart->quantity > 1) {
                $cart->quantity -= 1;
                $cart->save();
                return response()->json(['message' => 'Product quantity updated in cart'], 200);
            } else {
                $cart->delete();
                return response()->json(['message' => 'Product removed from cart'], 200);
            }
        } else {
            return response()->json(['message' => 'Product not found in cart'], 404);
        }
    }

    function searchCart($itemId)
    {
        return Carts::where('item_id', $itemId)->get();
    }
}
