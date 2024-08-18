<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use Inertia\Inertia;

class ClassController extends Controller
{
    public function index()
    {
        $dataClass = DB::table('classes')->get();
        return Inertia::render('Wallet', compact('dataClass'));
    }
    public function creat()
    {
        return Inertia::render('Product/AddClass');

    }

}
