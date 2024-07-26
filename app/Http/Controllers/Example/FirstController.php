<?php

namespace App\Http\Controllers\Example;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FirstController extends Controller
{
    public function index(){
        return Inertia::render('Wallet');
    }
    //
}
