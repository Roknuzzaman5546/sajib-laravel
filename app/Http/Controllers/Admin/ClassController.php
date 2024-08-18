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

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
        ]);
        $data = array(
            'classes_name' => $request->name,
            'email' => $request->email
        );
        DB::table('classes')->insert($data);
        return redirect()->back();
    }

}
