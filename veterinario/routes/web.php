<?php

use App\Http\Controllers\CadastroController;
use App\Http\Controllers\Cadastro2Controller;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\NpController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/veterinario',[CadastroController::class, 'cadastro'])->name('veterinario.cadastro');
Route::get('/teste',[cadastro2Controller::class, 'home'])->name('teste.home');
Route::get('/registros', [RegisterController::class, 'registros'])->name('registro.site');
Route::resource('clientes', ClienteController::class);
Route::get('/novopaciente',[NpController::class, 'novopaciente'])->name('novopaciente');

