@extends('layouts.front')
@section('content')
    <section class="services-detail">
        <div class="container text-center">
            <h2>{{ $article->title }}</h2>
            <p class="trend">{{ $article->summary }}</p>
            <div class="row">
                <div class="col-md-3 col-sm-12">
                    <div class="service-detail-one">
                        <img src="{{ asset('upload/gallery/'.@$gallery->image) }}" alt="" style="width:50px"> <span>{{ @$gallery->createdBy->name }}</span>
                        <h5>{{ @$gallery->title }}</h5>
                        <p>{{ @$gallery->created_at->format('F d, Y') }}</p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="service-detail-one">
                        <p><img src="{{ asset('upload/article/'.$article->image) }}" style="width:300px"></p>
                        <img src="{{ asset('upload/article/'.$article->image) }}" alt="" style="width:50px"> <span>{{ $article->name }}</span>
                        <h5>{{ $article->title }}</h5>
                        <p>{{ $article->description }}</p>
                        <p>{{ $article->created_at->format('F d, Y') }}</p>

                        <div class="comment">
                            @guest
                                <h4>You need to <a href="{{ route('login') }}" data-toggle="modal" data-target="#exampleModal">login</a> to Comment.</h4>
                            @else

                                @if(isset($review_data))
                                    <form action="{{ route('review-update', $review_data->id) }}" method="POST">
                                        @method('patch')
                                        @csrf

                                        <textarea class="form-control form-control-sm" id="edit-post" rows="4" style="resize: none;" name="review" placeholder="Place your comment here.">{{ @$review_data->review }}</textarea>
                                        <button type="submit">Comment</button>
                                    </form>
                                @else
                                    <form action="{{ route('blog-post', $article) }}" method="POST" id="comment-form">
                                        @csrf

                                        <textarea class="form-control form-control-sm" id="review-post" rows="4" style="resize: none;" name="review" placeholder="Place your comment here.">{{ @$review_data->review }}</textarea>
                                        <button type="submit">Comment</button>
                                    </form>
                                @endif

                            @endguest
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-12">
                                <hr/>

                                @include('front.partials.reviews')

                                <div class="page-number">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination example">
                                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-12">
                    <div class="service-detail-one">
                        <img src="{{ asset('images/2.jpg') }}" alt="" style="width:50px"> <span>Vesh Gurung</span>
                        <h5>What people think of Virtual hosting?</h5>
                        <p>2021 Febraury 21</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
