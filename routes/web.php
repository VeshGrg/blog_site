<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\VideoController;
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

//Route::get('/', function () {
//    return view('front.index');
//})->name('landing');

Auth::routes();

Route::group(['namespace' => 'App\Http\Controllers'], function(){
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('activate/{token}', [UserController::class, 'activateUser'])->name('activate');
    Route::get('/article/{article}', [ArticlesController::class, 'list'])->name('post.show');
    Route::get('/video/{video}', [VideoController::class, 'link'])->name('video.show');
    Route::get('/gallery/{gallery}', [GalleryController::class, 'image'])->name('gallery.show');
    Route::get('/home1', [HomeController::class, 'front'])->name('front');

    Route::get('/page-detail', [FrontendController::class, 'blogDetail'])->name('page-detail');
    Route::get('/', [FrontendController::class, 'home'])->name('landing');

    Route::group(['middleware' => 'auth'], function(){
        Route::post('/review', [FrontendController::class, 'postReview'])->name('blog-post');
        Route::get('/review/{review}/edit', [FrontendController::class, 'editReview'])->name('edit-review');
        Route::patch('/review/{review}', [FrontendController::class, 'updateReview'])->name('review-update');
        //Route::patch('service/post/gate', 'FrontendController@gate')->name('review-update');
    });

    Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'admin']], function(){
        Route::get('/', [HomeController::class, 'admin'])->name('admin');
        Route::get('/articles/list', [ArticlesController::class, 'article'])->name('articles');
        Route::get('/articles/create', [ArticlesController::class, 'create'])->name('new-article');
        Route::get('/add', [ArticlesController::class, 'index'])->name('add-article');
        Route::post('/submit', [ArticlesController::class, 'store'])->name('submit-article');
        Route::delete('/articles/{article}/delete', [ArticlesController::class, 'destroy'])->name('delete-article');
        Route::get('/articles/{article}/edit', [ArticlesController::class, 'edit'])->name('edit-article');
        Route::patch('/articles/{article}', [ArticlesController::class, 'update'])->name('update');
        Route::resource('user', "UserController");
        Route::get('/video/create', [VideoController::class, 'create'])->name('create-video');
        Route::get('/video', [VideoController::class, 'index'])->name('list-videos');
        Route::post('/video', [VideoController::class, 'store'])->name('add-video');
        Route::get('/gallery', [GalleryController::class, 'index'])->name('list-gallery');
        Route::get('/gallery/create', [GalleryController::class, 'create'])->name('create-gallery');
        Route::post('/submit', [GalleryController::class, 'store'])->name('add-gallery');
        Route::delete('/gallery/{gallery}/delete', [GalleryController::class, 'destroy'])->name('delete-gallery');
        Route::get('/gallery/{gallery}/edit', [GalleryController::class, 'edit'])->name('edit-gallery');
        Route::patch('/gallery/{gallery}', [GalleryController::class, 'update'])->name('update-gallery');
    });

    Route::group(['prefix' => 'blogger', 'middleware' => ['auth', 'blogger']], function(){
        Route::get('/', [HomeController::class, 'blogger'])->name('blogger');
    });

    Route::group(['prefix' => 'reader', 'middleware' => ['auth', 'reader']], function(){
        Route::get('/', [HomeController::class, 'reader'])->name('reader');
    });
});
