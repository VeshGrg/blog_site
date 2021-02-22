<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" type="text/css" href="@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');">
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="stylesheet" type="text/css" href="{{ asset('css/style1.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/bootstrap.css') }}">
    <link rel="stylesheet" href="{{ asset('css/slick.css') }}">
    <link rel="stylesheet" href="{{ asset('css/smoothproducts.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<div>
<!--top-header starts-->
<div class="top-header">
    <div class="container">
        <div class="row">
            <div class="top-left col-lg-8 col-md-8 col-sm-8">
                <p><strong>HAMRO BLOG</strong>
                    <span>where Thought collides</span></p>
            </div>
            <div class="top-right col-md-4 col-sm-4 col-4 text-right">
                <!-- Modal -->
                <p class="my-md-4 header-links">
                        <!-- <a href="#" class="px-2">Sign In</a> -->
                        <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary title-btn" data-toggle="modal" data-target="#exampleModal">
                        Login In / Create an Account
                    </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="containers" id="containers">
                                    <div class="form-container sign-up-container">
                                        <form action="{{ route('register') }}" method="POST">
                                            @csrf
                                            <h1>Create Account</h1>
                                            <input type="text" id="name" name="name" value="{{ old('name') }}" required placeholder="Name" />
                                            @error('name')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror

                                            <input type="email" id="email" name="email" value="{{ old('email') }}" required placeholder="Email" />
                                            @error('email')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror

                                            <input type="password" name="password" id="password" placeholder="Password" />
                                            @error('password')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                            <button type="submit">Sign Up</button>
                                        </form>
                                    </div>

                                    <div class="form-container sign-in-container">
                                        <form action="{{ route('login') }}" method="POST">
                                            @csrf
                                            <h1>Sign in</h1>
                                            <input type="email" id="email" name="email" class="form-control @error('email') is-invalid @enderror" placeholder="Email" value="{{ old('email') }}"/>
                                            @error('email')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                            <input type="password"  name="password" class="form-control @error('password') is-invalid @enderror" placeholder="Password" required/>
                                            @error('password')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                            <a href="#">Forgot your password?</a>
                                            <button type="submit">Sign In</button>
                                        </form>
                                    </div>

                                    <div class="overlay-container">
                                        <div class="overlay">

                                            <div class="overlay-panel overlay-left">
                                                <h1>Welcome Back!</h1>
                                                <p>To keep connected with us please login with your personal info</p>
                                                <button class="ghost" id="signIn">Sign In</button>
                                            </div>

                                            <div class="overlay-panel overlay-right">
                                                <h1>Hello!</h1>
                                                <p>Enter your details and start journey with us</p>
                                                <button class="ghost" id="signUp">Sign Up</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </p>
            </div>
        </div>
                {{--modal ends--}}
{{--            <div class="top-right col-lg-6 col-md-6 col-sm-6">--}}
{{--                <!--				<div class="top-right text-right">-->--}}
{{--                @if (Route::has('login'))--}}
{{--                    <div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">--}}
{{--                        @auth--}}
{{--                            <a href="{{ url('/home') }}" class="text-sm text-gray-700 underline">Home</a>--}}
{{--                        @else--}}
{{--                            <a href="{{ route('login') }}" class="text-sm text-gray-700 underline">Login</a>--}}

{{--                            @if (Route::has('register'))--}}
{{--                                <a href="{{ route('register') }}" class="ml-4 text-sm text-gray-700 underline">Register</a>--}}
{{--                            @endif--}}
{{--                        @endauth--}}
{{--                    </div>--}}
{{--                @endif--}}
{{--                <ul>--}}
{{--                    @guest--}}
{{--                        @if (Route::has('login'))--}}

{{--                            <li class="nav-item">--}}
{{--                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>--}}
{{--                            </li>--}}
{{--                        @endif--}}
{{--                        @if (Route::has('register'))--}}
{{--                            <li class="nav-item">--}}
{{--                                <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>--}}
{{--                            </li>--}}
{{--                        @endif--}}
{{--                    @else--}}
{{--                        <li class="nav-item dropdown">--}}
{{--                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>--}}
{{--                                @if(auth()->user()->userInfo != null && auth()->user()->userInfo->image != null && file_exists(public_path().'/upload/user/'.auth()->user()->userInfo->image) )--}}
{{--                                    <img src="{{ asset('upload/user/'.auth()->user()->userInfo->image) }}" alt="">--}}
{{--                                @else--}}
{{--                                    <img src="{{ asset('images/dummy.png') }}" class="img img-circle" style="width: 40px" alt="">--}}
{{--                                    <a href="{{ route('home') }}">{{ Auth::user()->name }}</a>--}}
{{--                                @endif--}}
{{--                            </a>--}}

{{--                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">--}}
{{--                                <a class="dropdown-item" href="{{ route('logout') }}"--}}
{{--                                   onclick="event.preventDefault();--}}
{{--                                    document.getElementById('logout-form').submit();">--}}
{{--                                    {{ __('Logout') }}--}}
{{--                                </a>--}}

{{--                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">--}}
{{--                                    @csrf--}}
{{--                                </form>--}}
{{--                            </div>--}}
{{--                        </li>--}}
{{--                    @endguest--}}
{{--                </ul>--}}
{{--                <!--			</div>-->--}}
{{--            </div>--}}
</div>
</div>
</section>
<!--	top-header ends-->
<!--nav-bar starts-->
<div class="nav">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-sm-12 col-md-12">
                <nav class="navbar navbar-default">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="true">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#"><img src="{{ asset('images/logo.png.png') }}" alt="img" style="width: 150px"></a>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li class="active1"><a href="#">HOME</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">ABOUT US <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Our Team</a></li>
                                    <li><a href="#">News</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="#">Investors</a></li>
                                </ul>
                            </li>
                            <li><a href="#">SERVICES</a></li>
                            <li><a href="#">GALLERY</a></li>
                            <li><a href="#">PRICING</a></li>
                            <li><a href="#">CONTACTS</a></li>
                        </ul>
                    </div><!-- /.navbar-collapse -->
                </nav>
            </div>
        </div>
    </div>
</div>
<!--nav-bar ends-->
<!-- product detail -->
<div class = "card-wrapper" style="margin-bottom: 55px; margin-top: 30px;">
    <div class = "card">
        <div class="container">
            <div class="row">
            <!-- card left -->
                <div class="col-sm-12 col-md-6">
                    <div class="product-detail-left">
            <div class="sp-loading">
                <img src="images/sp-loading.gif">
                Loading Images
            </div>
            <div class="sp-wrap">
                <a href="image/27.jpg"><img src="image/27.jpg" alt=""></a>
                <a href="image/27.jpg"><img src="image/27.jpg" alt=""></a>
                <a href="image/27.jpg"><img src="image/27.jpg" alt=""></a>
            </div>
        </div>
                </div>

                <!-- card right -->
              <div class="col-sm-12 col-md-6">
                <div class = "product-content">
            <h2 class = "product-title">Digital Canon Camera</h2>
            <div class = "product-price">
                <p class = "last-price">Old Price: <span>25700.00</span></p>
                <p class = "new-price"> Price: <span> 2200.00</span></p>
            </div>

            <div class = "product-detail">
                <!-- <h2>about this item: </h2> -->
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto.</p>
            </div>
        </div>
              </div>
            </div>
        </div>
    </div>
</div>
<!-- product detail -->

<!-- product description -->
<div class="container">
    <div class="description">
        <div class="row">
            <h4>Description</h4><br>
            <p>Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Officia, nemo! Maxime quaerat ipsam fugit excepturi vero animi fugiat doloremque quas necessitatibus omnis. Atque, quia tenetur quam minima illum vel, ipsum? Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Officia, nemo! Maxime quaerat ipsam fugit excepturi vero animi fugiat doloremque quas necessitatibus omnis. Atque, quia tenetur quam minima illum vel, ipsum?</p>
        </div>
    </div>
</div>
<!-- product description -->

<!-- ratings and reviews -->
<div class="container p-0">
    <div class="rating-review">
        <h4>Reviews</h4>
        <div class="row">
            <div class="col-sm-12">
                <hr/>
                <div class="review-block">
                    <div class="row">
                        <div class="col-sm-3">
                            <img src="image/27.jpg" class="img-rounded">
                            <div class="review-block-name"><a href="#">Name</a></div>
                            <div class="review-block-date">January 29, 2020<br/>1 day ago</div>
                        </div>
                        <div class="col-sm-9">
                            <div class="review-block-title">this was nice in buy</div>
                            <div class="review-block-description">this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</div>
                        </div>
                    </div>
                </div>

                <div class="add-review">
                    <form action="{{ route('post-comment') }}" method="POST" enctype="multipart/form-data">
                        @auth
                        <div class="form-group">
                            <label for="formGroupExampleInput">Add Your Review</label>
                            <textarea name="comment" id="formGroupExampleInput" rows="5" placeholder="Enter your comment here." class="form-control form-control-sm"></textarea>
                        </div>
                        @else
                            <p>Sorry, you need to <a href="" data-toggle="modal" data-target="#exampleModal">login</a> to post comment.</p>
                        @endauth
                        <button type="submit" class="btn btn-info btn-sm">Comment</button>
                    </form>
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
<!-- /container -->

<section class="address">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6">
                <h4>
                    Our Contact</h4>
                <p>Bootstrap company Inc<br>
                    JC Main Road, Near Silnile tower<br>
                    Pin-21542 NewYork US.<br><br>

                    (123) 456-789 - 1255-12584<br>
                    email@domainname.com</p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
                <h4>
                    Our Contact</h4>
                <p>Bootstrap company Inc<br>
                    JC Main Road, Near Silnile tower<br>
                    Pin-21542 NewYork US.<br><br>

                    (123) 456-789 - 1255-12584<br>
                    email@domainname.com</p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
                <h4>
                    Our Contact</h4>
                <p>Bootstrap company Inc<br>
                    JC Main Road, Near Silnile tower<br>
                    Pin-21542 NewYork US.<br><br>

                    (123) 456-789 - 1255-12584<br>
                    email@domainname.com</p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
                <h4>
                    Our Contact</h4>
                <p>Bootstrap company Inc<br>
                    JC Main Road, Near Silnile tower<br>
                    Pin-21542 NewYork US.<br><br>

                    (123) 456-789 - 1255-12584<br>
                    email@domainname.com</p>
            </div>
        </div>
    </div>
</section>
<div class="copy">
    <div class="container-fluid">
        <div class="row">
            <div class="copy-first col-lg-6 col-md-6 col-sm-6">
                <ul>
                    <li>Copyright 2019 © Design & Developed by WebThemez.</li>
                    <li>All rights reserved. Find More Free Bootstrap Templates</li>
                </ul>
            </div>
            <div class="copy-second col-lg-6 col-md-6 col-sm-6">
                <ul>
                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<script src="{{ asset('js/jquery-3.5.1.min.js') }}"></script>
<script src="{{ asset('js/bootstrap.min.js') }}"></script>
<script src="{{ asset('js/main.js') }}"></script>
<script src="{{ asset('js/slick.min.js') }}"></script>
<script src="{{ asset('js/smoothproducts.min.js') }}"></script>
</body>
</html>
