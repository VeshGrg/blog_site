<?php

namespace App\Policies;

use App\Models\Article;
use App\Models\User;
use App\Models\PostReview;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

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

    public function update(User $user, PostReview $postReview)
    {
        return $user->id === $postReview->user_id
            ? Response::allow()
            : Response::deny('You do not own this post.');
    }
}
