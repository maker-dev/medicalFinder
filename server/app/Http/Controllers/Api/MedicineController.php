<?php

namespace App\Http\Controllers\Api;

use App\Models\Medicine;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Ramsey\Uuid\Type\Integer;

class MedicineController extends Controller
{
    use HttpResponses;
    public function index(Request $request)
    {
        $query = Medicine::query();

        if ($request->input("search")) {
            $query->where(function ($subquery) use ($request) {
                $subquery->where('title', 'LIKE', '%' . $request->input("search") . '%');
                         // Add more conditions as needed
                         // ->orWhere('another_column', 'LIKE', '%' . $request->input("search") . '%');
            });
        }

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
        $medicineData = $request->all();

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->storeAs('public/images/imgMedicine/', $imageName);


            $medicineData['image'] = $imageName;
        }

        $medicine = Medicine::create($medicineData);


        return $this->success($medicine,null,200);
    }


    public function update(Request $request, $id) {
    $medicine = Medicine::findOrFail($id);



        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'category'=>'required',
            'forAdult'=>'required'
        ]);

        $medicineData = $request->all();


        if ($request->has('image')) {

        if ($medicine->image) {
            Storage::delete('public/images/imgMedicine' . $medicine->image);
        }

        $image = $request->file('image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->storeAs('public/images/imgMedicine', $imageName);


        $medicineData['image'] = $imageName;
    }

        $medicine->update($medicineData);

        return $this->success($medicine,null,200);

    }

    public function destroy($id) {
        $medicine = Medicine::find($id);
        $medicine->delete();
        return $this->success($medicine,null,200);
    }

    public function medicinePharmacies(Request $request, $id) {
        $medicine = Medicine::find($id);

        // Retrieve user coordinates from the request
        $userLatitude = $request->input('user_latitude');
        $userLongitude = $request->input('user_longitude');

        // Retrieve paginated pharmacies associated with the medicine
        $pharmacies = $medicine->pharmacies()
            ->select([
                '*',
                \DB::raw('(6371 * acos(cos(radians(?)) * cos(radians(JSON_EXTRACT(location, "$.latitude"))) * cos(radians(JSON_EXTRACT(location, "$.longitude")) - radians(?)) + sin(radians(?)) * sin(radians(JSON_EXTRACT(location, "$.latitude"))))) AS distance'),
            ])
            ->orderBy('distance')
            ->addBinding($userLatitude, 'select')
            ->addBinding($userLongitude, 'select')
            ->addBinding($userLatitude, 'select')
            ->paginate(3);

        $pharmacies->each(function ($pharmacy) {
            $pharmacy->ratings = $pharmacy->averageRating();
        });

        // Return a success response with the paginated pharmacies data
        return $this->success($pharmacies, null, 200);
    }

}
