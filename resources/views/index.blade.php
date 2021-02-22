<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');">
	<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

	<link rel="stylesheet" type="text/css" href="{{ asset('css/style1.css') }}">
	<link rel="stylesheet" type="text/css" href="{{ asset('css/bootstrap.min.css') }}">
</head>
<body>
<!--top-header starts-->
<section class="top-header">
	<div class="container">
		<div class="row">
			<div class="top-left col-md-6 col-sm-6">
				<p><strong><a href="">HAMRO BLOG</strong><span> where thinking collide</span></a></p>
			</div>
			<div class="top-right col-md-6 col-sm-6">
<!--				<div class="top-right text-right">-->
				<!-- Button trigger modal -->
                @auth
                    <a href="{{ url('/home') }}" class="text-sm text-gray-700 underline">Home</a>
                @else
				<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
					LogIn
				</button>
				<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">
                    Register
                </button>
				@endauth
                    <!-- Sign-in Modal -->
				<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h3 class="modal-title" id="exampleModalLabel">LogIn Form</h3>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
                                <form method="POST" action="{{ route('login') }}">
                                    @csrf

                                    <div class="form-group row">
                                        <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                                        <div class="col-md-6">
                                            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                            @error('email')
                                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                                        <div class="col-md-6">
                                            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                            @error('password')
                                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-md-6 offset-md-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                                <label class="form-check-label" for="remember">
                                                    {{ __('Remember Me') }}
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group row mb-0">
                                        <div class="col-md-8 offset-md-4">
                                            <button type="submit" class="btn btn-primary">
                                                {{ __('Login') }}
                                            </button>

                                            @if (Route::has('password.request'))
                                                <a class="btn btn-link" href="{{ route('password.request') }}">
                                                    {{ __('Forgot Your Password?') }}
                                                </a>
                                            @endif
                                        </div>
                                    </div>
                                </form>
							</div>
						</div>
					</div>
				</div>
<!--				Sign-in modal ends-->
<!--				Register Modal Starts-->
				<div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h3 class="modal-title" id="exampleModalLabel">SignUp Form</h3>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
                                <form method="POST" action="{{ route('register') }}">
                                    @csrf

                                    <div class="form-group row">
                                        <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                                        <div class="col-md-6">
                                            <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                            @error('name')
                                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                                        <div class="col-md-6">
                                            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                            @error('email')
                                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                                        <div class="col-md-6">
                                            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                            @error('password')
                                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                                        <div class="col-md-6">
                                            <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                                        </div>
                                    </div>

                                    <div class="form-group row mb-0">
                                        <div class="col-md-6 offset-md-4">
                                            <button type="submit" class="btn btn-primary">
                                                {{ __('Register') }}
                                            </button>
                                        </div>
                                    </div>
                                </form>
							</div>
						</div>
					</div>
				</div>
<!--	Register Modal ends-->
			</div>
		</div>
	</div>
</section>
<!--	top-header ende-->
<!--nav-bar starts-->
<div class="nav">
	<div class="container">
		<div class="row">
			<div class="col-sm-12 col-md-12">
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
						  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">OUR STORY <span class="caret"></span></a>
						  <ul class="dropdown-menu">
							<li><a href="#">Company</a></li>
							<li><a href="#">Our Team</a></li>
							<li><a href="#">News</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="#">Investors</a></li>
						  </ul>
						</li>
						<li><a href="#">MEMBERSHIP</a></li>
						<li><a href="#">WRITE</a></li>
						<li><a href="#">NEWS</a></li>
						<li><a href="#">CONTACTS</a></li>
					  </ul>
					</div><!-- /.navbar-collapse -->
				</nav>
			</div>
		</div>
	</div>
</div>
<!--nav-bar ends-->
<!--slider starts-->
<div class="explore">
	<div class="container-fluid">
		<div class="row">
			<div class="blog-banner1 col-sm-10 col-md-7">
				<p>Explore Blogs</p>
				<p>Read and share ideas from independent voices, world-class</p>
				<p>publications, and experts from around the globe. Everyone's</p>
				<p>welcome. Learn more.</p>
				<button>Get Started</button>
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
				<div class="col-md-4 col-sm-6">
					<div class="service-one">
						<a href=""><img src="{{ asset('images/22.jpg') }}" alt="" style="width:50px"> <span>Vesh Gurung</span></a>
						<h4><strong><a href="">What people think of Virtual hosting?</a></strong></h4>
						<p>2021 Febraury 21, Thursday</p>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="service-one">
						<a href=""><img src="{{ asset('images/11.jpg') }}" alt="" style="width:50px"> <span>Vesh Gurung</span></a>
						<h4><strong><a href="">What people think of Virtual hosting?</a></strong></h4>
						<p>2021 Febraury 21, Thursday</p>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="service-one">
						<a href=""><img src="{{ asset('images/11.jpg') }}" alt="" style="width:50px"> <span>Vesh Gurung</span></a>
						<h4><strong><a href="">What people think of Virtual hosting?</a></strong></h4>
						<p>2021 Febraury 21, Thursday</p>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="service-one">
						<a href=""><img src="{{ asset('images/11.jpg') }}" alt="" style="width:50px"> <span>Vesh Gurung</span></a>
						<h4><strong><a href="">What people think of Virtual hosting?</a></strong></h4>
						<p>2021 Febraury 21, Thursday</p>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="service-one">
						<a href=""><img src="{{ asset('images/11.jpg') }}" alt="" style="width:50px"> <span>Vesh Gurung</span></a>
						<h4><strong><a href="">What people think of Virtual hosting?</a></strong></h4>
						<p>2021 Febraury 21, Thursday</p>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="service-one">
						<a href=""><img src="{{ asset('images/11.jpg') }}" alt="" style="width:50px"> <span>Vesh Gurung</span></a>
						<h4><strong><a href="">What people think of Virtual hosting?</a></strong></h4>
						<p>2021 Febraury 21, Thursday</p>
					</div>
				</div>
			</div>
	</div>
</section>
<!--service category ends-->
<!--process category starts-->
<section class="process">
	<div class="container text-center">
			<div class="row">
				<div class="p1 col-md-8 col-sm-12">
					<div class="row">
						<div class="process-one col-md-8 col-sm-8">
							<h4><img src="{{ asset('images/2.jpg') }}" alt="" style="width: 45px"> Vesh Gurung</h4>
							<h3><strong>What people think of Virtual hosting?</strong></h3>
							<h4>lorem lipsum</h4>
							<p>2021 Febraury 21, Thursday</p>
						</div>
						<div class="process-two col-md-4 col-sm-4">
							<img src="{{ asset('images/22.jpg') }}" alt="" style="width: 100%">
						</div>
					</div>
				</div>
				<div class="process-three col-md-4 col-sm-12">
						<h4>Discover More</h4>
						<ul>
							<li><a href="">Science</a></li>
							<li><a href="">Entertainment</a></li>
							<li><a href="">Fiction</a></li>
						</ul>
						<ul>
							<li><a href="">Film</a></li>
							<li><a href="">Sports</a></li>
							<li><a href="">Nature</a></li>
						</ul>
						<ul>
							<li><a href="">Politics</a></li>
							<li><a href="">Dance</a></li>
							<li><a href="">Reality Show</a></li>
						</ul>
						<br>
						<p><a href="">See all Topics</a></p>
				</div>
				<div class="p1 col-md-8 col-sm-12">
					<div class="row">
						<div class="process-one col-md-8 col-sm-8">
							<h4><img src="{{ asset('images/2.jpg') }}" alt="" style="width: 45px"> Vesh Gurung</h4>
							<h3><strong>What people think of Virtual hosting?</strong></h3>
							<h4>lorem lipsum</h4>
							<p>2021 Febraury 21, Thursday</p>
						</div>
						<div class="process-two col-md-4 col-sm-4">
							<img src="{{ asset('images/22.jpg') }}" alt="" style="width: 100%">
						</div>
					</div>
				</div>
				<div class="p1 col-md-8 col-sm-12">
					<div class="row">
						<div class="process-one col-md-8 col-sm-8">
							<h4><img src="{{ asset('images/2.jpg') }}" alt="" style="width: 45px"> Vesh Gurung</h4>
							<h3><strong>What people think of Virtual hosting?</strong></h3>
							<h4>lorem lipsum</h4>
							<p>2021 Febraury 21, Thursday</p>
						</div>
						<div class="process-two col-md-4 col-sm-4">
							<img src="{{ asset('images/2.jpg') }}" alt="" style="width: 100%">
						</div>
					</div>
				</div>
				<div class="p1 col-md-8 col-sm-12">
					<div class="row">
						<div class="process-one col-md-8 col-sm-8">
							<h4><img src="{{ asset('images/2.jpg') }}" alt="" style="width: 45px"> Vesh Gurung</h4>
							<h3><strong>What people think of Virtual hosting?</strong></h3>
							<h4>lorem lipsum</h4>
							<p>2021 Febraury 21, Thursday</p>
						</div>
						<div class="process-two col-md-4 col-sm-4">
							<img src="{{ asset('images/22.jpg') }}" alt="" style="width: 100%">
						</div>
					</div>
				</div>
				<div class="p1 col-md-8 col-sm-12">
					<div class="row">
						<div class="process-one col-md-8 col-sm-8">
							<h4><img src="{{ asset('images/2.jpg') }}" alt="" style="width: 45px"> Vesh Gurung</h4>
							<h3><strong>What people think of Virtual hosting?</strong></h3>
							<h4>lorem lipsum</h4>
							<p>2021 Febraury 21, Thursday</p>
						</div>
						<div class="process-two col-md-4 col-sm-4">
							<img src="{{ asset('images/22.jpg') }}" alt="" style="width: 100%">
						</div>
					</div>
				</div>
			</div>
	</div>
</section>
<!--process category ends-->
<section class="address">
	<div class="container">
		<div class="row">
			<div class="col-md-3 col-sm-6">
				<h4>
					Our Contact</h4>
					<p>Bootstrap company Inc<br>
					JC Main Road, Near Silnile tower<br>
					Pin-21542 NewYork US.<br><br>

					(123) 456-789 - 1255-12584<br>
					email@domainname.com</p>
			</div>
			<div class="col-md-3 col-sm-6">
				<h4>
					Our Contact</h4>
					<p>Bootstrap company Inc<br>
					JC Main Road, Near Silnile tower<br>
					Pin-21542 NewYork US.<br><br>

					(123) 456-789 - 1255-12584<br>
					email@domainname.com</p>
			</div>
			<div class="col-md-3 col-sm-6">
				<h4>
					Our Contact</h4>
					<p>Bootstrap company Inc<br>
					JC Main Road, Near Silnile tower<br>
					Pin-21542 NewYork US.<br><br>

					(123) 456-789 - 1255-12584<br>
					email@domainname.com</p>
			</div>
			<div class="col-md-3 col-sm-6">
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
			<div class="copy-first col-md-6 col-sm-6">
					<p>Copyright 2019 © Design & Developed by WebThemez.<br>
					All rights reserved. Find More Free Bootstrap Templates</p>
			</div>
			<div class="copy-second col-md-6 col-sm-6">
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
</body>
</html>
