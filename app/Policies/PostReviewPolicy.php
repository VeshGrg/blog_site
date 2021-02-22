<?php

namespace App\Policies;

use App\Models\User;
use App\Models\PostReview;
use Illuminate\Auth\Access\HandlesAuthorization;

class PostReviewPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function update(User $user, PostReview $review)
    {
        dd("Sdf");
        return $user->id === $review->user_id
            ? Response::allow()
            : Response::deny('You do not own this post.');
    }
}
