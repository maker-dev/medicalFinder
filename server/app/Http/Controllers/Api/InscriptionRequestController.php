<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Models\InscriptionRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class InscriptionRequestController extends Controller
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
            'pharmacy_id' => 'required|exists:pharmacies,id',
        ]);

        $inscriptionRequest = $pharmacy->$this->inscription_request()->create([
            'pharmacy_id' => $pharmacy->id,
        ]);
        return $this->success($inscriptionRequest,null,200);
    }

   
    

    
    
    public function destroy(InscriptionRequest $inscriptionRequest)
    {
        //
        $inscriptionRequest->delete();
        return $this->success($inscriptionRequest,null,200);
    }
}
