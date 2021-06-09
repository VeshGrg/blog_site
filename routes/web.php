<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\FrontendController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('front.index');
})->name('landing');

Auth::routes();

Route::group(['namespace' => 'App\Http\Controllers'], function(){
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('activate/{token}', [UserController::class, 'activateUser'])->name('activate');
    Route::get('/home1', [HomeController::class, 'front'])->name('front');
    Route::get('articles', [FrontendController::class, 'allArticle'])->name('all-articles');


    Route::get('/', [FrontendController::class, 'home'])->name('landing');

    Route::group( ['middleware' => 'auth'], function(){
        Route::post('/article/{article}/review', [FrontendController::class, 'postReview'])->name('blog-post');
        //Route::post('review/comment', [ArticlesController::class, 'comment'])->name('blog-post');
        Route::get('/review/{review}/edit', [\App\Http\Controllers\PostReviewController::class, 'edit'])->name('edit-review');
        Route::patch('/review/{review}', [\App\Http\Controllers\PostReviewController::class, 'update'])->name('review-update');

        Route::get('/articles', [ArticlesController::class, 'index'])->name('articles');
        Route::get('/articles/create', [ArticlesController::class, 'create'])->name('new-article');
        Route::post('/submit-article', [ArticlesController::class, 'store'])->name('submit');
        Route::delete('/articles/{article}/delete', [ArticlesController::class, 'destroy'])->name('delete-article');
        Route::get('/articles/{article}/edit', [ArticlesController::class, 'edit'])->name('edit-article');
        Route::patch('/articles/{article}', [ArticlesController::class, 'update'])->name('update');

        Route::resource('user', "UserController");

        Route::get('/galleries', [GalleryController::class, 'index'])->name('list-gallery');
        Route::get('/gallery/create', [GalleryController::class, 'create'])->name('create-gallery');
        Route::post('gallery-submit', [GalleryController::class, 'store'])->name('add-gallery');
        Route::delete('/gallery/{gallery}/delete', [GalleryController::class, 'destroy'])->name('delete-gallery');
        Route::get('/gallery/{gallery}/edit', [GalleryController::class, 'edit'])->name('edit-gallery');
        Route::patch('/gallery/{gallery}', [GalleryController::class, 'update'])->name('update-gallery');

        Route::get('/reviews', [\App\Http\Controllers\PostReviewController::class, 'index'])->name('list-review');
        Route::delete('review/{review}/delete', [\App\Http\Controllers\PostReviewController::class, 'destroy'])->name('delete-review');
    });

    Route::get('articles/{article}', [FrontendController::class, 'article'])->name('article-detail');

    Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'admin']], function(){
        Route::get('/', [HomeController::class, 'admin'])->name('admin');
    });

    Route::group(['prefix' => 'blogger', 'middleware' => ['auth', 'blogger']], function(){
        Route::get('/', [HomeController::class, 'blogger'])->name('blogger');

    });

    Route::group(['prefix' => 'reader', 'middleware' => ['auth', 'reader']], function(){
        Route::get('/', [HomeController::class, 'reader'])->name('reader');

    });
});
