<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/navbar',[HomeController::class,'getNavbar']);
Route::get('/logo',[HomeController::class,'getLogo']);
Route::get('/banner',[HomeController::class,'getBanner']);
Route::get('/slider',[HomeController::class,'getSlider']);
Route::get('/courses',[HomeController::class,'getCoursesList']);
Route::get('/courses/{alias}',[HomeController::class,'getCoursesDetai']);
Route::get('/CompanyInfo',[HomeController::class,'getCompanyInfo']);
Route::get('/team',[HomeController::class,'getTeamList']);
Route::get('/contact',[HomeController::class,'getContact']);
Route::get('/family',[HomeController::class,'getFamily']);
Route::get('/gallery',[HomeController::class,'getGallery']);
Route::get('/blog',[HomeController::class,'getBlogList']);
Route::get('/blog/{alias}',[HomeController::class,'getBlogDetai']);
Route::get('/social',[HomeController::class,'getSocial']);
//
// Route::get('admin', [UserController::class,'getUser'])->name('getUser');

// Auth
Route::post('register',[AuthController::class,'signup']);
Route::post('admin',[AuthController::class,'login']);

