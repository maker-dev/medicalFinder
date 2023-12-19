<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\MedicineController;
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
Route::get("/pharmacie/{id}", [PharmacyController::class, "show"]);
Route::get("/pharmacie/edit/{id}", [PharmacyController::class, "edit"]);
Route::put("/pharmacie/{id}", [PharmacyController::class, "update"]);
Route::post("/pharmacies", [PharmacyController::class, "store"]);
Route::delete('/pharmacie/{id}',[PharmacyController::class,"delete"]);


Route::post('/medicines', [MedicineController::class, 'store']);
Route::get("/medicines", [MedicineController::class, "index"]);
Route::get('/medicines/search',[MedicineController::class,'search']);
Route::get("/medicine/{id}", [MedicineController::class, "show"]);
Route::get("/medicine/edit/{id}", [MedicineController::class, "edit"]);
Route::put('/medicine/{id}', [MedicineController::class, 'update']);
Route::delete('/medicines/{id}', [MedicineController::class, 'destroy']);

Route::post("/register", [AuthController::class, "register"]);
Route::post("/login", [AuthController::class, "login"]);

Route::middleware("auth:sanctum")->group(function () {
    Route::get("/user", [AuthController::class, "user"]);
    Route::post("/logout", [AuthController::class, "logout"]);
});
