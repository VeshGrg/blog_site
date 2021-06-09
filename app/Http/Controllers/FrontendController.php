<?php

namespace App\Http\Controllers;

use App\Models\BloggerArticle;
use App\Models\Gallery;
use App\Models\UserInfo;
use App\Models\User;
use App\Models\Article;
use App\Models\PostReview;
use Illuminate\Http\Request;
use Illuminate\Auth\Access\Response;
use Illuminate\Support\Facades\Gate;

class FrontendController extends Controller
{
    protected $user = null;
    protected $review = null;

    public function __construct(User $user, PostReview $review)
    {
        $this->user = $user;
        $this->review = $review;
    }

    public function home(Article $article)
    {
        $article = $article->orderBy('id', 'DESC')->limit(8)->get();

        $all_articles = \App\Models\Article::inRandomOrder()->limit(8)->get();
        return view('front.index')
            ->with('article_detail', $article)
            ->with('articles', $all_articles);
    }

    public function allArticle(Article $article)
    {
        $articles = $article->orderBy('id', 'DESC')->get();
        return view('front.all-articles')
            ->with('all_articles', $articles);
    }

    public function article(Request $request,Article $article)
    {
        //$this->article = $this->article->firstOrFail();
        $gallery = Gallery::firstOrFail();
        return view('front.blog-detail')
            ->with('article', $article)
            ->with('gallery', $gallery);
    }

    public function postReview(Request $request, Article $article)
    {
        if($request->ajax()) {

            $data = array(
                'review' => $request->review,
                'article_id' => $article->id,
                'user_id' => $request->user()->id
            );
            $this->review->fill($data);
            $this->review->save();

            $response = array(
                'status' => 'success',
                'msg' => 'Review added successfully',
                'data' => view('front.partials.review', ['article' => $article, 'review' => $this->review])->render()
            );
            return response()->json($response);
        }

        return redirect()->route('article-detail');
    }

    public function updateReview(Request $request, $id)
    {
        // Update the post...
        $this->validateId($id);
        $request->validate($this->review->validateReview());
        $data = $request->all();
        $this->review->fill($data);
        $status = $this->review->save();
        if($status){
            $request->session()->flash('success', 'Review uploaded successfully.');
        }else{
            $request->session()->flash('error', 'Sorry, review could not be uploaded.');
        }
        return redirect()->route('article-detail');
    }

    public function validateId($id)
    {
        $this->review = $this->review->find($id);

        if(!$this->review){
            \request()->session()->flash('error', 'Sorry, no id found.');
            return redirect()->back();
        }
    }
}
