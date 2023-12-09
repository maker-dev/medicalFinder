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

        $token = $user->createToken("token");

        return $this->success([
            'user'  => $userInfo,
            'token' => $token->plainTextToken
        ], null, 200);

    }


    public function logout() {


    }


}
