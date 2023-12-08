<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicineRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'pharmacy_id',
        'title',
        'description'
    ];

    public function pharmacy() {
        return $this->belongsTo(Pharmacy::class, 'pharmacy_id', 'id');
    }
}
