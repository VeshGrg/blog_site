<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Comment;

class Article extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'name', 'user_id', 'genre', 'summary', 'description', 'is_featured', 'image'];

    public function validateRules($act = 'add'){
        $rules = [
            'title' => 'required|string|max:150',
            'name' => 'required|string|max:50',
            'genre' => 'required|in:entertainment,sport,it',
            'summary' => 'required|min:3|max:1000',
            'description' => 'required|min:3|max:5000',
            'is_featured' => 'required|boolean',
            'image' => ($act == 'add' ? 'required|': 'sometimes|')."image|max:5000"
            ];
        return $rules;
    }

    public function userInfo()
    {
        return $this->hasOne('App\Models\User', 'id', 'user_id');
    }

    public function comment()
    {
        return $this->morphOne('App\Models\Comment', 'commentable');
    }

    public function reviews()
    {
        return $this->hasMany('App\Models\PostReview', 'article_id', 'id')->orderBy('id', 'DESC')->limit(5);
    }

}
