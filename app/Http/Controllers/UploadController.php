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
        // dd($request->image);
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
        return Inertia::render('Product/Upload');
    }
    public function id_verify(Request $request)
    {

        if ($request->id_front && !$request->id_back) {
            $this->validate($request, [
                'id_front' => 'required|mimes:png,jpeg|max:1024',
            ]);
            if (Auth::user()->id_front) {
                @unlink(public_path(Auth::user()->id_front));
            }
            $id_front = $request->file('id_front');
            $filename = 'id_front' . '_' . Auth::user()->id . '.' . $id_front->getClientOriginalExtension();
            $id_front->move('userDocument', $filename);
            $user = User::find(Auth::user()->id);
            $user->id_front = '/userDocument/' . $filename;
            $user->update();
        } else {

            $this->validate($request, [
                'id_front' => 'required|mimes:png,jpeg|max:1024',
                'id_back' => 'required|mimes:png,jpeg|max:1024',
            ]);
            if (Auth::user()->id_front) {
                @unlink(public_path(Auth::user()->id_front));
            }
            if (Auth::user()->id_back) {
                @unlink(public_path(Auth::user()->id_back));
            }
            $id_front = $request->file('id_front');
            $id_back = $request->file('id_back');

            $filename_front = 'id_front' . '_' . Auth::user()->id . '.' . $id_front->getClientOriginalExtension();
            $filename_back = 'id_back' . '_' . Auth::user()->id . '.' . $id_back->getClientOriginalExtension();
            $id_front->move('userDocument', $filename_front);
            $id_back->move('userDocument', $filename_back);
            $user = User::find(Auth::user()->id);
            $user->id_front = '/userDocument/' . $filename_front;
            $user->id_back = '/userDocument/' . $filename_back;
            $user->update();
        }
        return redirect()->route('marchant')->with('success', 'Identity proof Upload successfully');
    }
}
