<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\APIController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends APIController
{
    public function __invoke(Request $request)
    {
        $this->validate($request, [
            'email' => 'email|required|unique:users,email',
            'name' => 'required|string|min:4|max:255',
            'password' => 'required|string|min:8|confirmed'
        ]);

        $user = User::create([
            'email' => $request->email,
            'name' => $request->name,
            'password' => bcrypt($request->password),
        ]);

        if (!$token = auth()->attempt($request->only(['email', 'password']))) {
            return abort(401);
        }

        return (new UserResource($request->user()))->additional(['meta' => ['token' => $token]]);
    }
}
