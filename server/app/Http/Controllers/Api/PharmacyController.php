<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pharmacy;
use Illuminate\Http\Request;

class PharmacyController extends Controller
{
    public function index()
    {
        $query = Pharmacy::query()->where("verified", true);
        $pharmacies = $query->paginate(5);
        return response()->json($pharmacies, 200);
    }

    public function show(String $id) {
        $pharmacy = Pharmacy::find($id);
        return response()->json($pharmacy);
    }
}
