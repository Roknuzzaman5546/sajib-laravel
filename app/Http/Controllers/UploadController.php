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
    public function contactStore(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:50',
            'email' => 'required',
            'password' => 'required|min:6|max:12',
        ]);
        if ($validated) {
            return Inertia::render('Dashboard');
        } else {
            return Inertia::render(route('dashboard'));
        }
    }
}
