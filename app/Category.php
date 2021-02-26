<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;

class Category extends Model
{
    public function posts()
    {
        return $this->belongsToMany('App\Models\Post');
    }
    protected $fillable = [
        'name', 'alias', 'description','image','parent_id',
    ];
    Protected $table ='category';
}
