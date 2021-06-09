<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\PostReview;
use App\Models\User;
use Illuminate\Http\Request;

class PostReviewController extends Controller
{
    public function index(PostReview $review)
    {
        $review->get();
        return view('admin.review.index')
            ->with('reviews', $review);
    }

    public function edit(Article $article, PostReview $postReview)
    {
        $this->authorize('update', $postReview);
        //dd($article);
        return view('front.blog-detail')
            ->with([
                'review_data' => $postReview,
                'article' => $article
            ]);
    }

    public function update(Request $request, PostReview $postReview)
    {
        //dd($request);
        $this->authorize('update', $postReview);

        // Update the post...
        $request->validate($postReview->validateReview());
        $data = $request->all();
        $postReview->fill($data);
        $postReview->save();
        return redirect()->route('article-detail');

    }

    public function destroy($id)
    {
        $review = PostReview::findOrFail($id);

        $del = $review->delete();
        if($del){
            request()->session()->flash('success', 'Review deleted successfully.');
        }else{
            \request()->session()->flash('error', 'Sorry, there was error while deleting review.');
        }
        return redirect()->route('list-review');
    }
}
