<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Models\MedicineRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class MedicineRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    use HttpResponses;
   

    

   
    public function store(Request $request)
    {
        //
        $pharmacy = Auth::user();

        
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
        ]);

        $medicineRequest = $pharmacy->$this->medicine_requests()->create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
        ]);

        return $this->success($medicineRequest,null,200);
    }

   
    public function update(Request $request, MedicineRequest $medicineRequest)
    {
        //
        $pharmacy = Auth::user();

       
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            
        ]);

        $medicineRequest->update([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'pharmacy_id' => $pharmacy->id, 
        ]);


        return $this->success($medicineRequest,null,200);
    }

    
    public function destroy(MedicineRequest $medicineRequest)
    {
        //
        $medicineRequest->delete();
        return $this->success($medicineRequest,null,200);
    }
}
