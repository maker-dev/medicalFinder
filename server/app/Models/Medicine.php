<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medicine extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image',
        'category',
        'forAdult'
    ];

    public function pharmacies() {
        return $this->belongsToMany(Pharmacy::class, 'medicines_pharmacies', 'medicine_id', 'pharmacy_id')
        ->withPivot('price')
        ->withPivot('quantity');
    }
}
