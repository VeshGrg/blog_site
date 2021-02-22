<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Comment;

class Gallery extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'image', 'status', 'user_id'];

    public function validateGallery()
    {
        $rules = [
            'title' => 'required|string|max:100',
            'image' => 'required|image|max:5000',
            'status' => 'required|in:active,inactive'
        ];
        return $rules;
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function createdBy()
    {
        return $this->belongsTo('App\Models\User', 'user_id', 'id');
    }
}
