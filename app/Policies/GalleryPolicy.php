<?php

namespace App\Policies;

use App\Models\Gallery;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class GalleryPolicy
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

    public function update(User $user, Gallery $gallery)
    {
        return $user->id === $gallery->user_id
            ? Response::allow()
            : Response::deny('You do not own this post.');
    }

    public function delete(User $user, Gallery $gallery)
    {
        return $user->id === $gallery->user_id
            ? Response::allow()
            : Response::deny('You do not own this post.');
    }
}
