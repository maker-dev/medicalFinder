<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'firstName',
        'lastName',
        'email'
    ];

    public function ratings() {
        return $this->belongsToMany(Pharmacy::class, 'ratings', 'client_id', 'pharmacy_id')
                ->withPivot("rating")
                ->withPivot("comment");
    }
}
