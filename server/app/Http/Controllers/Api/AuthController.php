<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Client;
use App\Models\Pharmacy;
use App\Models\User;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    use HttpResponses;

    public function register(Request $request) {

        $userType = $request->input("userType");

        if ($userType == "client") {

            $validator = Validator::make($request->all(), [
                'firstName' => 'required|string|min:3|max:255',
                'lastName' => 'required|string|min:3|max:255',
                'email' => 'required|email|unique:users',
                'password' => 'required|string|min:6|confirmed',
            ]);

            if ($validator->fails()) {
                return $this->error(null, $validator->errors(), 422);
            }

            $user = Client::create($request->all());

        } else if ($userType == "pharmacy") {

            $validator = Validator::make($request->all(), [
                'name' => 'required|string|min:3|max:255|unique:pharmacies',
                'email' => 'required|email|unique:users',
                'password' => 'required|string|min:6|confirmed',
            ]);

            if ($validator->fails()) {
                return $this->error(null, $validator->errors(), 422);
            }

            $user = Pharmacy::create($request->all());

        } else {
            return $this->error(null, "No User Type Selected.", 422);
        }

        User::create([
            'email' => $user->email,
            'password' => $user->password,
            'type' => $userType,
            'user_id' => $user->id
        ]);


        return $this->success(null, "Account has been created.", 200);

    }


    public function login(Request $request) {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return $this->error(null, $validator->errors(), 422);
        }

        if (!Auth::attempt($request->only(['email', 'password']))) {
            return $this->error(null, "Credentials do not match.", 401);
        }

        $user = User::where("email", $request->input("email"))->first();

        if ($user->type == "client") {
            $userInfo = Client::find($user->user_id);
        } else if ($user->type == "pharmacy") {
            $userInfo = Pharmacy::find($user->user_id);
        } else if ($user->type == "admin") {
            $userInfo = Admin::find($user->user_id);
        }

        $token = $user->createToken("token")->plainTextToken;

        $cookie = cookie("jwt", $token, 7 * 60 * 24); // 1 week

        return $this->success([
            'user'  => $userInfo
        ], "Login successfully.", 200)->withCookie($cookie);

    }

    public function user() {
        $user = Auth::user();
        if ($user->type == "client") {
            $userInfo = Client::find($user->id);
        } else if ($user->type == "pharmacy") {
            $userInfo = Pharmacy::find($user->id);
        }
        return $this->success([
            'user' => $userInfo
        ], "Data received successfully.", 200);
    }


    public function logout() {

        $cookie = Cookie::forget("jwt");

        Auth::user()->tokens()->delete();

        return $this->success(null, "Logout successfully.", 200)->withCookie($cookie);

    }


}
