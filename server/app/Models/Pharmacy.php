<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pharmacy extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name',
        'email',
        'description',
        'opening_time',
        'opening_time',
        'phone',
        'address',
        'city',
        'location',
        'image',
        'verified',
        'permanence'
    ];

    protected $casts = [
        'location' => 'json'
    ];

    public function inscription_request() {
        return $this->hasOne(InscriptionRequest::class, 'pharmacy_id', 'id');
    }

    public function medicine_requests() {
        return $this->hasMany(MedicineRequest::class, 'pharmacy_id', 'id');
    }

    public function medicines() {
        return $this->belongsToMany(Medicine::class, 'medicines_pharmacies', 'pharmacy_id', 'medicine_id')
                ->withPivot('price')
                ->withPivot('quantity');
    }

    public function ratings() {
        return $this->belongsToMany(Client::class, 'ratings', 'pharmacy_id', 'client_id')
                ->withPivot("rating")
                ->withPivot("comment");
    }

    public function averageRating()
    {
        $totalRatings = $this->ratings()->count();

        if ($totalRatings > 0) {
            // Calculate the average rating using the average aggregate function
            return $this->ratings()->avg('ratings.rating');
        }

        return 0; // No ratings yet, return a default value (e.g., 0)
    }

}
