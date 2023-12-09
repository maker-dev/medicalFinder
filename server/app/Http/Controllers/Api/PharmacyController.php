<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pharmacy;
use App\Traits\HttpResponses;

class PharmacyController extends Controller
{
    use HttpResponses;
    public function index()
    {
        $query = Pharmacy::query()->where("verified", true);
        $pharmacies = $query->paginate(5);
        return $this->success($pharmacies, null, 200);
    }

    public function show(String $id) {
        $pharmacy = Pharmacy::find($id);
        return $this->success($pharmacy, null, 200);
    }
}
