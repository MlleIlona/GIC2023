<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['name'];
    protected $fillable = ['category_id'];
    protected $fillable = ['description'];
    protected $fillable = ['pricing'];
    protected $fillable = ['images'];
}
