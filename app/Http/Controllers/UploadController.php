<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

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
        return Inertia::render('Product/Laravel', ['name' => 'Roknuzzaman sajib']);
    }
    public function contact()
    {
        return Inertia::render('Contact/PostFrom');
    }
}
