<?php

namespace App\Http\Controllers;
use App\Category;
use App\Company_Info;
use App\Banner;
use App\Courses;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    public function indexCourses()
    {
        return courses::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Catregory  $catregory
     * @return \Illuminate\Http\Response
     */
    public function show(Catregory $catregory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Catregory  $catregory
     * @return \Illuminate\Http\Response
     */
    public function edit(Catregory $catregory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Catregory  $catregory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Catregory $catregory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Catregory  $catregory
     * @return \Illuminate\Http\Response
     */
    public function destroy(Catregory $catregory)
    {
        //
    }

}
