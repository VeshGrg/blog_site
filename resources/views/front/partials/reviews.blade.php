<div class="review-block" id="article-review">

    @php
        $reviews = $article->reviews()->paginate(6);
    @endphp

    @foreach($reviews as $review)

        @include('front.partials.review')

        <hr>
    @endforeach

</div>
