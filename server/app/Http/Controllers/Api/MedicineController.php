<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Medicine;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;

class MedicineController extends Controller
{
    use HttpResponses;
    public function index()
    {
        $query = Medicine::query();
        $medicines = $query->paginate(6);
        return $this->success($medicines, null, 200);
    }

    public function show(String $id) {
        $medicine = Medicine::find($id);
        return $this->success($medicine, null, 200);
    }
}
