<?php

namespace App\Http\Controllers\Api;

use App\Models\Medicine;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

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

    public function searchMedicine(Request $request)
{
    if ($request->has('search')) {
        $search = $request->input('search');
        $data = DB::table('medicines')
            ->where('title', 'LIKE', '%' . $search . '%')
            
            ->get();
       
        return response()->json($data);
    } else {
        return response()->json([]);
    }

}
}
