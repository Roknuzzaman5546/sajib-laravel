<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;

class UploadController extends Controller
{
    //
    public function indexUpload()
    {
        return Inertia::render('Product/Upload');
    }
    public function productStore(Request $request)
    {
        // dd($request->has('name'));
        $array = [
            'sajib',
            'abir',
            'azim',
            'roni',
            'sohag',
            'hridoy',
            'Riyad'
        ];
        if (in_array($request->name, $array)) {
            return Inertia::render('Product/Success');
        }
        return redirect()->back()->with('status', 'product updated!');
    }

    public function laravel()
    {
        return Inertia::render('Product/Laravel', ['name' => Auth::user()]);
    }
    public function contactStore(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:50',
            'email' => 'required|email',
            'password' => 'required|min:6|max:12',
        ]);
        // database query
        // database store
        \Log::channel('contactstore')->info('the contact submited by' . rand(0, 20));
        return redirect()->back();
    }

    public function storeId($id)
    {
        // dd($id);
        echo Crypt::encryptString($id);
    }

    public function aboutIndex(){
        return Inertia::render('Product/AboutUs');
    }
}
