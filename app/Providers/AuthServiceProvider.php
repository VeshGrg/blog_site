<?php

namespace App\Providers;

use App\Models\Article;
use App\Models\Gallery;
use App\Models\User;
use App\Policies\ArticlePolicy;
use App\Policies\GalleryPolicy;
use App\Policies\PostReviewPolicy;
use App\Policies\UserPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use App\Models\PostReview;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
        PostReview::class => PostReviewPolicy::class,
        Article::class => ArticlePolicy::class,
        Gallery::class => GalleryPolicy::class,
        User::class => UserPolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

//        Gate::define('update', function ($user, $post) {
//            return $user->id == $post->user_id;
//        });
    }
}
