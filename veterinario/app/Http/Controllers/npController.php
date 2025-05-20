<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class npController extends Controller
{
    public function novopaciente(){
        return view('novopaciente');
    }
}
