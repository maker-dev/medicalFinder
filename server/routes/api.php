<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\InscriptionRequestController;
use App\Http\Controllers\Api\MedicineController;
use App\Http\Controllers\Api\MedicineRequestController;
use App\Http\Controllers\Api\PharmacyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get("/pharmacies", [PharmacyController::class, "index"]);
Route::get("/pharmacies/{id}", [PharmacyController::class, "show"]);
Route::post('/pharmacies', [PharmacyController::class, 'store']);
Route::put("/pharmacies/{id}", [PharmacyController::class, "update"]);
Route::delete('/pharmacies/{id}',[PharmacyController::class,"destroy"]);


Route::post('/medicineRequest',[MedicineRequestController::class,"store"]);
Route::put('/medicineRequest/{id}',[MedicineRequestController::class,"update"]);
Route::delete('/medicineRequest/{id}',[MedicineRequestController::class,"destroy"]);

Route::post('/inscriptionRequest',[InscriptionRequestController::class,"store"]);
Route::delete('/inscriptionRequest/{id}',[InscriptionRequestController::class,"destroy"]);


Route::get("/medicines", [MedicineController::class, "index"]);
Route::get("/medicines/{id}", [MedicineController::class, "show"]);
Route::post('/medicines', [MedicineController::class, 'store']);
Route::put('/medicines/{id}', [MedicineController::class, 'update']);
Route::delete('/medicines/{id}', [MedicineController::class, 'destroy']);
Route::get("/medicines/{id}/pharmacies", [MedicineController::class, "medicinePharmacies"]);

Route::post("/register", [AuthController::class, "register"]);
Route::post("/login", [AuthController::class, "login"]);

Route::middleware("auth:sanctum")->group(function () {
    Route::get("/user", [AuthController::class, "user"]);
    Route::post("/logout", [AuthController::class, "logout"]);
});
