<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UploadController extends Controller
{
    //
    public function indexUpload(){
        return Inertia::render('Product/Upload');
    }
}
