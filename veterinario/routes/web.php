<?php

use App\Http\Controllers\CadastroController;
use App\Http\Controllers\Cadastro2Controller;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/veterinario',[CadastroController::class, 'cadastro'])->name('veterinario.cadastro');
Route::get('/teste',[cadastro2Controller::class, 'home'])->name('teste.home');
Route::get('/registros', [RegisterController::class, 'registros'])->name('registro.site');
