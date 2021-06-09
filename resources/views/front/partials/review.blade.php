<div class="row pagination">
    <div class="col-sm-3 col-md-3">
        @if($review->getUser->userInfo != null)
            <img src="{{ asset('upload/user/'.$review->getUser->userInfo->image) }}" class="img-rounded" style="width: 100%">
        @else
            <img src="{{ asset('images/dummy.png') }}" class="img-rounded" style="width: 100%">
        @endif
        <div class="review-block-name"><a href="#">{{ $review->getUser->name }}</a></div>
        <div class="review-block-date">{{ $review->created_at->format('F d, Y') }}</div>
    </div>

    <div class="pages col-sm-8 col-md-8">
        <div class="review-block-review">{{ $review->review }}</div>
    </div>

    <div class="col-sm-1 col-md-1">
        <a href="{{ route('edit-review', $review->id) }}">edit</a>
    </div>
</div>
