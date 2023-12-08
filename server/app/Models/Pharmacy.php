<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pharmacy extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'address',
        'city',
        'location',
        'verified',
        'permanence'
    ];

    protected $hidden = [
        'password'
    ];

    protected $casts = [
        'password' => 'hashed',
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

}
