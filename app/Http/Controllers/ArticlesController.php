<?php

namespace App\Http\Controllers;

use App\Models\PostReview;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\Comment;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
    }

    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.article-create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Article $article)
    {
        $rules = $article->validateRules();
        $request->validate($rules);
        $data = $request->except('image');
        $image_name = uploadImage($request->image, 'article', '600x300');
        if($image_name){
            $data['image'] = $image_name;
        }
        $data['user_id'] = auth()->user()->id;
        $article->fill($data);
        $article->save();
        return redirect()->route('articles')
            ->withSuccess('Article added successfully.');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        $this->authorize('update', $article);
        return view('admin.article-create')
            ->with('article_detail', $article);
    }

    public function update(Request $request, Article $article)
    {
        $rules = $article->validateRules('update');
        $request->validate($rules);
        $data = $request->all();
        $article->fill($data);
        $article->save();
        return redirect()->route('articles')
            ->withSuccess('Article upgraded successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function destroy(Article $article)
    {
        $this->authorize('delete', $article);
        $article->delete();
        return redirect()->route('articles')
            ->withSuccess('Article destroyed successfully.');

    }

    public function article(Article $article)
    {
        $article = Article:: get();
        return view('admin.article')
            ->with('all_data', $article);
    }
}
