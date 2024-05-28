<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\OrderDetail;
use App\Models\Orders;
use App\Models\Carts;

use Illuminate\Http\Request;
use DateTime;
use DateTimeZone;

class OrderController extends Controller
{
    public function viewOrder($id=null){
        return $id ? Orders::find($id) : Orders::all();
    }

    public function addOrder(Request $request)
    {
        $timezone = new DateTimeZone('Asia/Ho_Chi_Minh');

        // Lấy thông tin đơn hàng từ yêu cầu
        $userId = $request->input('Table_id');
        $total = $request->input('Total');

        // Tạo đối tượng đơn hàng mới
        $order = new Orders();
        $order->Table_id = $userId;
        $order->Total = $total;
        $now = new DateTime('now', $timezone);
        $order->OrderDate = $now->format('Y-m-d H:i:s');

        // Lưu đơn hàng vào cơ sở dữ liệu
        $order->save();

        return response()->json(['message' => 'Thêm đơn hàng thành công'], 200);
    }

public function addOrderAndDetail(Request $request, $tableId)
{
    $timezone = new DateTimeZone('Asia/Ho_Chi_Minh');

    // Lấy thông tin đơn hàng từ yêu cầu
    // $userId = $request->input('Table_id');
    $total = $request->input('Total');

    // Tạo đối tượng đơn hàng mới
    $order = new Orders();
    $order->Table_id = $tableId;
    $order->Total = $total;
    $now = new DateTime('now', $timezone);
    $order->OrderDate = $now->format('Y-m-d H:i:s');

    // Lưu đơn hàng vào cơ sở dữ liệu
    $order->save();

    // Lấy danh sách sản phẩm từ cơ sở dữ liệu
    $cartItems = Carts::all();

    // Thêm chi tiết đơn hàng cho từng sản phẩm trong giỏ hàng
    foreach ($cartItems as $cartItem) {
        $foodId = $cartItem->item_id;
        $quantity = $cartItem->quantity;
        $price = $cartItem->price;

        // Tạo đối tượng chi tiết đơn hàng mới
        $orderDetail = new OrderDetail();
        $orderDetail->OrderId = $order->id;
        $orderDetail->Quantity = $quantity;
        $orderDetail->Price = $price;
        $orderDetail->FoodId = $foodId;

        // Lưu chi tiết đơn hàng vào cơ sở dữ liệu
        $orderDetail->save();
    }

    // Xóa giỏ hàng sau khi đã tạo đơn hàng thành công
    Carts::truncate();

    return response()->json(['message' => 'Thêm đơn hàng thành công'], 200);
}

    //add OrderDetail
    //create user = Table_id


    //admin
    //add admin update order va OrderDetail
    //create table = admin = qr code
    // Tao table -> co ma Qr code -> quyet ma Qr dang nhap web e-menu


    //OrderDetail
    public function viewOrderDetail($id=null){
        return $id ? OrderDetail::find($id) : OrderDetail::all();
    }

    function searchOrderDetailById($orderId){
        return OrderDetail::where("OrderId",$orderId)->get();
    }

}