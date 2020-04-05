<?php

use Illuminate\Http\Request;
use App\Project;

Route::get('/project/{project}', 'ProjectController@show');
Route::get('/project', 'ProjectController@index');
Route::post('/project', 'ProjectController@store');
Route::patch('/project/{project}', 'ProjectController@update');
Route::delete('/project/{project}', 'ProjectController@destroy');

//Route::get('/project/{project}/note', 'NoteController@index');
Route::get('/project/{project}/note', 'NoteController@show');
Route::post('/project/{project}/note', 'NoteController@store');

// Auth Endpoints
Route::group([
    'prefix' => 'v1/auth'
], function ($router) {
    Route::post('login', 'Auth\LoginController');
    Route::post('logout', 'Auth\LogoutController@logout');
    Route::post('register', 'Auth\RegisterController@register');
    Route::post('forgot-password', 'Auth\ForgotPasswordController@email');
    Route::post('password-reset', 'Auth\ResetPasswordController@reset');
    Route::get('me', 'Auth\MeController@me');
});

// Resource Endpoints
Route::group([
    'prefix' => 'v1'
], function ($router) {
    Route::apiResource('todo', 'TodoController');
});

// Not Found
Route::fallback(function(){
    return response()->json(['message' => 'Resource not found.'], 404);
});
