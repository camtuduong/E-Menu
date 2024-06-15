<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Lấy dữ liệu từ yêu cầu đăng ký
        $data = $request->only(['name', 'email', 'password']);

        // Mã hóa mật khẩu
        $data['password'] = Hash::make($data['password']);

        // Tạo người dùng mới trong cơ sở dữ liệu
        $user = User::create($data);

        // Trả về phản hồi JSON chứa thông tin người dùng
        return response()->json(['user' => $user], 201);
    }
    public function login(Request $request)
    {
        // Lấy dữ liệu từ yêu cầu đăng nhập
        $credentials = $request->only(['email', 'password']);

        // Kiểm tra tính hợp lệ của mật khẩu
        if (Auth::attempt($credentials)) {
            // Mật khẩu hợp lệ, thực hiện các hành động tiếp theo
            return response()->json(['message' => 'Đăng nhập thành công'], 200);
        } else {
            // Lấy thông tin người dùng dựa trên email
            $user = User::where('email', $request->email)->first();

            if (!$user) {
                // Email không tồn tại trong hệ thống
                return response()->json(['message' => 'Email không tồn tại'], 401);
            } else {
                // Mật khẩu không đúng
                return response()->json(['message' => 'Mật khẩu không đúng'], 401);
            }
        }
    }
}