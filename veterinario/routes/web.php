<?php

use App\Http\Controllers\cadastroController;
use App\Http\Controllers\cadastro2Controller;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/veterinario',[cadastroController::class, 'cadastro'])->name('cadastro');
Route::get('/veterinario',[cadastro2Controller::class, 'home'])->name('home');
