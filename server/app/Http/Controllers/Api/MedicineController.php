<?php

namespace App\Http\Controllers\Api;

use App\Models\Medicine;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

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

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'category'=>'required',
            'forAdult'=>'required'
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->storeAs('storage/images', $imageName);


            $request->merge(['image' => $imageName]);
        }

        $medicine = Medicine::create($request->all());

        return $this->success($medicine,null,200);
    }

    public function update(Request $request, $id) {
    $medicine = Medicine::find($id);

    $request->validate([
        'name' => 'required',
        'description' => 'required',
        'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        'category'=>'required',
        'forAdult'=>'required'
    ]);


    if ($request->hasFile('image')) {

        if ($medicine->image) {
            Storage::delete('storage/images/' . $medicine->image);
        }

        $image = $request->file('image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->storeAs('storage/images', $imageName);


        $request->merge(['image' => $imageName]);
    }

    $medicine->update($request->all());

    return $this->success($medicine,null,200);

    }

    public function destroy($id) {
        $medicine = Medicine::find($id);



        $medicine->delete();


        return $this->success($medicine,null,200);
    }

    public function search(Request $request) {
        $search = $request->input('search');
        $medicines = Medicine::where('title', 'LIKE', '%' . $search . '%')->get();
        return $this->success($medicines, null, 200);
    }
}
