<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use DB;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dataStudents = DB::table('students')->paginate(5);
        // $first = DB::table('students')
        //     ->whereNull('name');

        // $users = DB::table('students')
        //     ->whereNull('email')
        //     ->union($first)
        //     ->get();
        // return response()->json($users);
        // $dataStudents = DB::table('students')->paginate(3);
        // dd($dataStudents);

        return Inertia::render('Students/AllStudents', ['dataStudents' => $dataStudents]) ;
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
        return redirect()->route('students.create')->with('success', 'Student updated successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = DB::table('students')->where('id', $id)->first();
        $users = DB::table('students')->max('phone');
        dd($users);
        return Inertia::render('Students/SingleStudent', ['dataStudent' => $user]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $data = DB::table('students')->where('id', $id)->first();
        $dataClasses = DB::table('classes')->get();
        // dd($data);
        return Inertia::render('Students/EditStudents', ['dataStudents' => $data, 'dataClasses' => $dataClasses]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
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
        DB::table('students')->where('id', $id)->update($data);
        return redirect()->route('students.index')->with('success', 'Student updated successfully.');
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
