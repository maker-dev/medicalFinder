<?php

namespace App\Http\Controllers\Api;

use App\Models\Pharmacy;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class PharmacyController extends Controller
{
    use HttpResponses;
    public function index()
    {
        $query = Pharmacy::query()->where("verified", true);
        $pharmacies = $query->paginate(5);

        $pharmacies->each(function ($pharmacy) {
            $pharmacy->ratings = $pharmacy->averageRating();
        });

        return $this->success($pharmacies, null, 200);
    }

    public function show(String $id) {
        $pharmacy = Pharmacy::find($id);
        $pharmacy->ratings = $pharmacy->averageRating();
        return $this->success($pharmacy, null, 200);
    }

    public function delete($id){
        $pharmacie=Pharmacy::findOrFail($id);
        $pharmacie->delete();
        return $this->success($pharmacie,null,200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        

        $pharmacie = Pharmacy::create(['name' => $request->input('name')]);

        return $this->success($pharmacie, null, 200);
    }

    public function edit($id)
    {
        $data = Pharmacy::findOrFail($id);
        return $this->success($data, null, 200);
    }

    public function update(Request $request, $id)
    {
        $pharmacie = Pharmacy::findOrFail($id);

        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'opening_time' => 'required|date',
            'closing_time' => 'required|date',
            'phone' => 'required',
            'address' => 'required',
            'city' => 'required',
            'location' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'verified' => 'required|boolean',
            'permanence' => 'required|boolean',
        ]);

        $pharmacieData = $request->all();

        if ($request->has('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->storeAs('public/images/imgPharmacie', $imageName);

            $pharmacieData['image'] = $imageName;
        }

        $pharmacie->update($pharmacieData);

        return $this->success($pharmacie, null, 200);
    }
}
