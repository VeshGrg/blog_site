<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostReview extends Model
{
    use HasFactory;
    protected $fillable = ['article_id', 'user_id', 'review'];

    public function validateReview()
    {
        return [
            'review' => 'required|string'
        ];
    }

    public function getUser()
    {
        return $this->hasOne('App\Models\User', 'id', 'user_id');
    }

    public function getArticle()
    {
        return $this->hasOne('App\Models\Article', 'id', 'article_id');
    }
}
