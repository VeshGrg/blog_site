<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use DB;

class ArticlesController extends Controller
{
    protected $article = null;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct(Article $article)
    {
        $this->article = $article;
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
    public function store(Request $request)
    {
        $rules = $this->article->validateRules();
        $request->validate($rules);
        $data = $request->except('image');
        $image_name = uploadImage($request->image, 'article', '600x300');
        if($image_name){
            $data['image'] = $image_name;
        }
        $this->article->fill($data);
        $status = $this->article->save();
        if($status){
            $request->session()->flash('success', 'Article created successfully.');
        }else{
            $request->session()->flash('error', 'Sorry, there was error while creating article.');
        }
        return redirect()->route('articles');

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
    public function edit($id)
    {
        $this->validateId($id);
        return view('admin.article-create')->with('article_detail', $this->article);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validateId($id);
        $rules = $this->article->validateRules($act = 'update');
        $request->validate($rules);

        $data = $request->except('image');
        if($request->image){
            $image_name = uploadImage($request->image, 'article', '600x300');
            if($image_name) {
                $data['image'] = $image_name;
                if ($this->article->image != null) {
                    deleteImage($this->article->image, 'article');
                }
            }
        }
        $this->article->fill($data);
        $status = $this->article->save();
        if($status){
            $request->session()->flash('success', 'Article updated successfully.');
        }else{
           $request->session()->flash('error', 'Sorry, there was error while updating article.');
        }

        return redirect()->route('articles');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->validateId($id);
        $image = ($this->article->image) ? $this->article->image : null;

        $del = $this->article->delete();
        if($del){
            if($image){
                deleteImage($image, 'article');
            }
            request()->session()->flash('success', 'Article deleted successfully.');
        }else{
            \request()->session()->flash('error', 'Sorry, there was error while deleting article.');
        }
        return redirect()->route('articles');

    }

    public function article()
    {
        $this->article = $this->article->get();
        return view('admin.article')
            ->with('all_data', $this->article);
    }

    private function validateId($id)
    {
        $this->article = $this->article->find($id);
        if(! $this->article){
            \request()->session()->flash('error', 'Article not found');
            return redirect()->back();
        }
    }

    public function list(Article $article)
    {
        return view('post.show', compact('article'));
    }
}
