<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

    
});

//For User Actions
Route::post('/usersignin',[UserController::class,'signin']); //READ
Route::put('/usersignup',[UserController::class,'signup']); //CREATE
Route::patch('/useredit',[UserController::class,'signup']); //CREATE
Route::delete('/userdelete',[UserController::class,'delete']); //CREATE
// Route::delete('/users',[UserController::class,'delete']);

//For Guide Actions
