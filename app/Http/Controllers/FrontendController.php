<?php

namespace App\Http\Controllers;

use App\Models\UserInfo;
use App\Models\User;
use App\Models\Article;
use App\Models\PostReview;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Carbon;


class FrontendController extends Controller
{
    protected $user = null;
    protected $review = null;
    protected $comment = null;
    public function __construct(User $user,Article $article, PostReview $review, Comment $comment)
    {
        $this->user = $user;
        $this->article = $article;
        $this->review = $review;
        $this->comment = $comment;
    }

    public function home()
    {
        $this->article = $this->article->orderBy('id', 'DESC')->limit(6)->get();
        return view('front.index')
            ->with('article_detail', $this->article);
    }

    public function blogDetail(Request $request)
    {
        $this->article = $this->article->firstOrFail();
        $count = 0;
        if($request->user()){
            $count = $this->review->where('article_id', $this->article->id)->where('user_id', $request->user()->id)->count();
        }
        return view('front.blog-detail')
            ->with('reviewd', $count)
            ->with('all_article', $this->article);
    }

    public function postReview(Request $request)
    {
        if($request->ajax()){
            $comment = new PostReview();
            $comment->fd = $request->input( 'review' );
            $comment->type = "text";
            $comment->save();
            $response = array(
                'status' => 'success',
                'msg' => 'Setting created successfully',
            );
            return Response::json($response);
            return 'yes';
        }else{
            return 'no';
        }
//        $this->article = $this->article->firstOrFail();
//        $request->validate($this->review->validateReview());
//        $data = array(
//            'article_id' => $this->article->id,
//            'user_id' => $request->user()->id,
//            'review' => $request->review
//        );
//        $this->review->fill($data);
//        $status = $this->review->save();
//        if($status){
//            $request->session()->flash('success', 'Review added successfully.');
//        }else{
//            $request->session()->flash('error', 'Sorry, there was error while adding review.');
//        }

        return redirect()->route('page-detail');
    }

    public function editReview($id)
    {
        $this->validateId($id);
        return view('front.blog-detail')
            ->with('review_data', $this->review);
    }

    public function gate()
    {
        $post = PostReview::find(1);

        if (Gate::allows('update-post', $post)) {
            echo 'Allowed';
        } else {
            echo 'Not Allowed';
        }

        exit;
    }

    public function updateReview(Request $request, $id)
    {
        //$this->authorize('update');
        // Update the post...
        $this->validateId($id);
        $request->validate($this->review->validateReview());
        $data = $request->all();
        $this->review->fill($data);
        $status = $this->review->save();
        if($status){
//            $data['user_id'] = $this->user->id;
//            if($this->user->userInfo == null){
//                $this->user->userInfo = new UserInfo();
//            }
//            $this->user->userInfo->fill($data);
//            $this->user->userInfo->save();
            $request->session()->flash('success', 'Review uploaded successfully.');
        }else{
            $request->session()->flash('error', 'Sorry, review could not be uploaded.');
        }
        return redirect()->route('page-detail');
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
