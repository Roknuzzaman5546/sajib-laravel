<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

class PasswordController extends Controller
{
    public function passwordChange()
    {
        return Inertia::render('Auth/ChangePassword');
    }
    //
}
