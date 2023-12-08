<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InscriptionRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'pharmacy_id'
    ];

    public function pharmacy() {
        return $this->belongsTo(Pharmacy::class, 'pharmacy_id', 'id');
    }
}
