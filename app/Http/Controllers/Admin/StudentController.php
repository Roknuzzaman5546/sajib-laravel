<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use Inertia\Inertia;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dataStudents = DB::table('students')->get();
        // dd($dataStudents);
        return Inertia::render('Students/AllStudents', ['dataStudents' => $dataStudents]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $dataClasses = DB::table('classes')->get();
        return Inertia::render('Students/StudentsCreate', ['dataClasses' => $dataClasses]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'class_id' => 'required',
            'email' => 'required',
            'roll' => 'required',
            'phone' => 'required',
        ]);
        $data = array(
            'name' => $request->name,
            'class_id' => $request->class_id,
            'email' => $request->email,
            'roll' => $request->roll,
            'phone' => $request->phone
        );
        DB::table('students')->insert($data);
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        DB::table('students')->where('id', $id)->delete();
        return redirect()->route('students.index')->with('success', 'Student deleted successfully.');
    }
}
