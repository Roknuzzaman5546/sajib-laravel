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
        // dd($dataClass);
        return Inertia::render('Wallet', ['dataClass' => $dataClass]);
    }
    public function creat()
    {
        return Inertia::render('Product/AddClass');
    }

    public function store(Request $request)
    {
        $request->validate([
            'classes_name' => 'required|unique:classes',
            'email' => 'required|unique:classes',
        ]);
        $data = array(
            'classes_name' => $request->classes_name,
            'email' => $request->email
        );
        DB::table('classes')->insert($data);
        return redirect()->back();
    }

    public function distroy($id)
    {
        DB::table('classes')->where('id', $id)->delete();
        return redirect()->back();
    }

    public function updateRoute($id)
    {
        $data = DB::table('classes')->where('id', $id)->first();
        // dd($data);
        return Inertia::render('Product/EditClass', ['editData' => $data]);
    }

}
