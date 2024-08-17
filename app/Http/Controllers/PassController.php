<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Auth;
use Hash;

class PassController extends Controller
{
    public function passwordChange()
    {
        return Inertia::render('Auth/ChangePassword');
    }
    public function passwordUpdate(Request $request)
    {
        dd($request->current_password);
        $request->validate([
            'current_password' => 'required',
            'password' => 'required|max:16|min:6|confirmed',
            'password_confirmation' => 'required',
        ]);

        $user = Auth::user();
        if (Hash::check($request->current_password, $user->password)) {
            $user->password = Hash::make($request->password);
            $user->save();
            return redirect()->back('/');
        } else {
            return redirect()->back()->with('error', 'passoword not mathced');
        }


    }
}
