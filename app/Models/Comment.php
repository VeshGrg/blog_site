<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = ['comment', 'commentable_id', 'commentable_type'];
    /**
     * Get the parent imageable model (user or post).
     */
    public function commentable()
    {
        return $this->morphTo();
    }
}
