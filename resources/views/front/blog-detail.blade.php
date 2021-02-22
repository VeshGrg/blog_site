@extends('layouts.front')
@section('content')
    <section class="services-detail">
        <div class="container text-center">
            <h2>Trending Blogs</h2>
            <p class="trend">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident,<br>
                doloribus omnis minus ovident, doloribus omnis minus temporibus perferendis nesciunt..</p>
            <div class="row">
                <div class="col-md-3 col-sm-12">
                    <div class="service-detail-one">
                        <img src="{{ asset('images/11.jpg') }}" alt="" style="width:50px"> <span>Vesh Gurung</span>
                        <h5>What people think of Virtual hosting?</h5>
                        <p>2021 Febraury 21, Thursday</p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="service-detail-one">
                        <p><img src="{{ asset('images/33.jpg') }}" style="width:300px"></p>
                        <img src="{{ asset('images/11.jpg') }}" alt="" style="width:50px"> <span>{{ @$all_article->name }}</span>
                        <h5>{{ @$all_article->title }}</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>{{ @$all_article->created_at }}</p>
                        <div class="comment">
                            @guest
                                <h4>You need to <a href="{{ route('login') }}" data-toggle="modal" data-target="#exampleModal">login</a> to Comment.</h4>
                            @else
                                @include('admin.partials.notify')

                                    @if(isset($review_data))
                                <form action="{{ route('review-update', $review_data->id) }}" method="POST">
                                    @method('patch')
                                    @else
                                        <form action="{{ route('blog-post') }}" method="POST" id="comment-form">
                                    @endif
                                    @csrf
                                    <textarea class="form-control form-control-sm" id="review-post" rows="4" style="resize: none;" name="review" placeholder="Place your comment here.">{{ @$review_data->review }}</textarea>
                                    <button type="submit" id="btnSubmit">Comment</button>
                                </form>
                            @endguest
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-12">
                                <hr/>
                                <div class="review-block" id="article-review">
                                    @if(@$all_article->reviews)
                                        @foreach(@$all_article->reviews as $article_review)
                                            <div class="row">
                                        <div class="col-sm-3 col-md-3">
                                            @if($article_review->getUser->userInfo != null)
                                            <img src="{{ asset('upload/user/'.$article_review->getUser->userInfo->image) }}" class="img-rounded" style="width: 100%">
                                            @else
                                                <img src="{{ asset('images/dummy.png') }}" class="img-rounded" style="width: 100%">
                                                @endif
                                                <div class="review-block-name"><a href="#">{{ $article_review->getUser->name }}</a></div>
                                            <div class="review-block-date">{{ $article_review->created_at }}</div>
                                        </div>
                                        <div class="col-sm-8 col-md-8">
                                            <div class="review-block-title">{{ $article_review->getArticle->title }}</div>
                                            <div class="review-block-description">{{ $article_review->getArticle->description }}</div>
                                            <div class="review-block-review">{{ $article_review->review }}</div>
                                        </div>
                                                <div class="col-sm-1 col-md-1">
                                                    <a href="{{ route('edit-review', $article_review->id) }}">edit</a>
                                                </div>
                                    </div>
                                            <hr>
                                        @endforeach
                                        @endif
                                </div>

                                <div class="page-number">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination">
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
                        <p>2021 Febraury 21, Thursday</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
