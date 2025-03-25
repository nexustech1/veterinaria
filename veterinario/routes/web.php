<?php

use App\Http\Controllers\cadastroController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/veterinario',[cadastroController::class, 'cadastro'])->name('cadastro');
