<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\PostReview;
use App\Models\User;
use Illuminate\Http\Request;

class PostReviewController extends Controller
{
    public function index(PostReview $postReview)
    {
        $postReview = PostReview::get();
        return view('admin.review.index')
            ->with('reviews', $postReview);
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
        $this->authorize('update', $postReview);

        // Update the post...
        $request->validate($postReview->validateReview());
        $data = $request->all();
        $postReview->fill($data);
        $postReview->save();
        return redirect()->route('article-detail');

    }

    public function destroy(PostReview $postReview)
    {
        $review = PostReview::findOrFail($postReview->id);
        $review->delete();
        return redirect()->route('list-review')
            ->withSuccess('Review deleted successfully.');
    }
}
