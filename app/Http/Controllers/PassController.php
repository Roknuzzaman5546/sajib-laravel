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
        return Inertia::render('Profile/Edit');
    }
}
