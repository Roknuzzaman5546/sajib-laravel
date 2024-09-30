<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ClassController extends Controller
{
    public function index()
    {
        $dataClass = DB::table('classes')->get();
        // $dataClass = DB::table('classes')->paginate(2);
        // dd($dataClass);
        return Inertia::render('Wallet', ['dataClass' => $dataClass]);
        // dd($dataClass);
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
        // $data = DB::table('classes')->where()
        // dd($data);
        return Inertia::render('Product/EditClass', ['editData' => $data]);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'classes_name' => 'required',
            'email' => 'required',
        ]);
        $data = array(
            'classes_name' => $request->classes_name,
            'email' => $request->email
        );
        DB::table('classes')->where('id', $id)->update($data);
        return redirect()->back();
    }

}
