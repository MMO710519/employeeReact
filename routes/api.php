<?php

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


Route::get('/user', function (Request $request) {
    $users = App\Models\User::all();
    return response()->json(['users'=>$users]);
});

Route::get('/user/{user}', function(App\Models\User $user){
    return response()->json(['user'=>$user]);
});

Route::get('/employee', function (Request $request) {
    $employees = App\Models\Employee::all();
    return response()->json(['employees'=>$employees]);
});

Route::get('/employee/{employee}', function(App\Models\Employee $employee){
    return response()->json(['employee'=>$employee]);
});

