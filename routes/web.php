<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

use Illuminate\Http\Request;
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

Route::get('/', function () {return view('home');})->name('home');

Route::get('/team', function () {return view('team');})->name('team');

Route::get('/blog', function () {return view('blog');})->name('blog');

Route::get('/blog/{alias}', function () {return view('blog');})->name('blog.detail');

Route::get('/courses', function () {return view('courses');})->name('courses');

Route::get('/courses/{alias}', function () {return view('courses');})->name('courses.detail');

Route::get('/contact', function () {return view('contact');})->name('contact');

Route::get('/admin', function () {return view('auth');})->name('admin');

Route::get('/auth/login', function () {return view('auth');})->name('auth.login');

Route::get('/login', function () {return view('auth');})->name('auth.login');
Route::get('/register', function () {return view('auth');})->name('auth.login');

Route::get('./auth/register', function () {return view('auth');})->name('auth.register');

Route::get('/auth/reset-password', function () {return view('auth');})->name('auth.reset-password');

Route::get('/auth/forgot-password', function () {return view('auth');})->name('auth.forgot-password');
