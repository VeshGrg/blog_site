<?php

namespace App\Providers;

use App\Models\Post;
use App\Models\Video;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
//        Relation::morphMap([
//            Post::class => 'post',
//            Video::class => 'video',
//        ]);
    }
}
