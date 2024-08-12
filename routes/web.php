<?php

use App\Http\Controllers\Example\FirstController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UploadController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/home', [FirstController::class, 'index'])->middleware('auth')->name('wallet');
Route::get('/test', function(Request $request){
    $request->session()->put('age', '24');
    // session(['name' => 'sojib']);
});
Route::get('/all', function(Request $request){
    return $request->session()->all();
});



// route direct view by inertia
// Route::get('/upload', function () {
//     return Inertia::render('Product/Upload');
// })->middleware('auth')->name('product.upload');


Route::get('/country', function () {
    return Inertia::render('Product/Upload');
})->middleware('country');


Route::get('/contact', function () {
    return Inertia::render('Contact/PostFrom');
})->middleware(['auth', 'verified'])->name('contact');



Route::get('/uploadId/{id}', function ($id) {
    return "this is upload id" . $id;
});

Route::middleware('auth')->group(function () {
    Route::get('/upload', [UploadController::class, 'indexUpload'])->name('product.upload');
    Route::post('/upload', [UploadController::class, 'productStore'])->name('product.post');
    Route::get('/laravel', [UploadController::class, 'laravel'])->name('laravel');
    Route::post('/contact', [UploadController::class, 'contactStore'])->name('contact.post');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__ . '/auth.php';
