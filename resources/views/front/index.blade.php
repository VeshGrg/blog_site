@extends('layouts.front')
@section('content')
    <div class="explore">
        <div class="container">
            <div class="row">
                <div class="blog-banner1 col-sm-10 col-md-7">
                    <h1>Explore Blogs</h1>
                    <p>Read and share ideas from independent voices, world-class</p>
                    <p>publications, and experts from around the globe. Everyone's</p>
                    <p>welcome. Learn more.</p>
                    <strong><a href="#" data-toggle="modal" data-target="#exampleModal">Get Started</a></strong>
                </div>
                <div class="blog-banner2 col-sm-10 col-md-5">
                    <img src="{{ asset('images/22.jpg') }}" alt="blog-image" style="width: 100%; height:350px">
                </div>
            </div>
        </div>
    </div>
    <!--slider ends-->
    <!--service category starts-->
    <section class="services">
        <div class="container text-center">
            <h3><i class="fa fa-bar-chart" aria-hidden="true"></i> Trending Blogs</h3>
            <br>
            <div class="row">
                @if($article_detail)
                    @foreach($article_detail as $article)
                        <div class="col-md-4 col-sm-6">
                            <div class="service-one">
                                <a href="#"><img src="{{ asset('upload/article/'.$article->image) }}" alt="" style="width:50px"> <span>{{ $article->name }}</span></a>
                                <h4><strong><a href="{{ route('article-detail', $article->id) }}">{{ $article->title }}</a></strong></h4>
                                <p>{{ $article->created_at->format('F d, Y') }}</p>
                            </div>
                        </div>
                    @endforeach
                @endif
            </div>
        </div>
    </section>
    <!--service category ends-->
    <!--process category starts-->
    <section class="process">
        <div class="container text-center">
            <div class="row">
                <div class="process-three col-md-12 col-sm-12">
                    <h4>Discover More</h4>
                    <ul>
                        <li><a href="">Science</a></li>
                        <li><a href="">Entertainment</a></li>
                        <li><a href="">Fiction</a></li>
                        <li><a href="">Film</a></li>
                        <li><a href="">Sports</a></li>
                        <li><a href="">Nature</a></li>
                        <li><a href="">Politics</a></li>
                        <li><a href="">Dance</a></li>
                        <li><a href="">Reality Show</a></li>
                    </ul>
                    <br>
                    <p><a href="#">See all Topics/Articles</a></p>
                </div>
            </div>
            <div class="row">
                @if($articles)
                    @foreach($articles as $all_articles)
                        <div class="p2 offset-3 col-md-8 col-sm-12">
                            <div class="row">
                                <div class="process-one col-md-8 col-sm-8">
                                    <h4><img src="{{ asset('upload/article/'.$all_articles->image) }}" alt="" style="width: 45px"> {{ $all_articles->name }}</h4>
                                    <h3><strong><a href="{{ route('article-detail', $all_articles->id) }}">{{ $all_articles->title }}</a></strong></h3>
                                    <h4>{{ $all_articles->summary }}</h4>
                                    <p>{{ $all_articles->created_at->format('F d, Y') }}</p>
                                </div>
                                <div class="process-two col-md-4 col-sm-4">
                                    <img src="{{ asset('upload/article/'.$all_articles->image) }}" alt="" style="width: 70%">
                                </div>
                            </div>
                        </div>

                    @endforeach
                @endif

            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="row">

            </div>
        </div>
    </section>
    <!--process category ends-->
@endsection
