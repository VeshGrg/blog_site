@extends('layouts.admin')
@section('content')
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container">

                <div class="row">
                    <div class="col-12">
                        <h3>Add an User</h3>
                    </div>
                </div>
                <br>
                @if(isset($user_detail))
                    <form action="{{ route('user.update', $user_detail->id) }}" method="POST" enctype="multipart/form-data">
                        @method('patch')

                        @else
                            {{ $errors }}
                            <form action="{{ route('user.store') }}" method="POST" enctype="multipart/form-data">

                                @endif
                                @csrf
                                <div class="form-group row">
                                    <label for="name" class="col-3">Name :</label>
                                    <div class="col-9">
                                        <input type="text" class="form-control form-control-sm" name="name" value="{{ @$user_detail->name }}"}} placeholder="Enter Username here." required>
                                        @error('name')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>

                                @if(!isset($user_detail))
                                <div class="form-group row">
                                    <label for="email" class="col-3">Email :</label>
                                    <div class="col-9">
                                        <input type="text" class="form-control form-control-sm" name="email" id="email" value="{{ @$user_detail->email }}" placeholder="Enter Email address here." required>
                                        @error('email')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password" class="col-3">Password :</label>
                                    <div class="col-9">
                                        <input type="password" class="form-control form-control-sm" name="password" value="" id="password" placeholder="Enter Password here." required>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password_confirmation" class="col-3">Retype-Password :</label>
                                    <div class="col-9">
                                        <input type="password" class="form-control form-control-sm" name="password_confirmation" value="" placeholder="Retype Password." id="password_confirmation" required>
                                        <span class="text-danger" id="error_password"></span>
                                    </div>
                                </div>
                                @endif

                                <div class="form-group row">
                                    <label for="role" class="col-3">Role :</label>
                                    <div class="col-9">
                                        <select name="role" id="role" class="form-control form-control-sm">
                                            <option value="blogger" {{ (isset($user_detail) && $user_detail->role == 'blogger') ? 'selected' : '' }}>Blogger</option>
                                            <option value="reader" {{ (isset($user_detail) && $user_detail->role == 'reader') ? 'selected' : ''}}>Reader</option>
                                        </select>
                                        @error('role')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="status" class="col-3">Status :</label>
                                    <div class="col-9">
                                        <select name="status" id="status" class="form-control form-control-sm">
                                            <option value="active" {{ (isset($user_detail) && $user_detail->status == 'active') ? 'selected' : '' }}>Active</option>
                                            <option value="inactive" {{ (isset($user_detail) && $user_detail->genre == 'inactive') ? 'selected' : ''}}>Inactive</option>
                                        </select>
                                        @error('status')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="phone" class="col-3">Phone :</label>
                                    <div class="col-9">
                                        <input type="text" class="form-control form-control-sm" name="phone" value="{{ @$user_detail->userInfo->phone }}"}} placeholder="Enter Phone Number here." required>
                                        @error('phone')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="address" class="col-3">Address :</label>
                                    <div class="col-9">
                                        <textarea name="address" id="address" cols="30" rows="5" class="form-control form-control-sm" placeholder="Enter the Address here.">{{ @$user_detail->userInfo->address }}</textarea>
                                        @error('address')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="genre" class="col-3">Genre/Category :</label>
                                    <div class="col-9">
                                        <select name="genre" id="genre" class="form-control form-control-sm">
                                            <option value="entertainment" {{ (isset($user_detail) && $user_detail->genre == 'entertainment') ? 'selected' : '' }}>Entertainment</option>
                                            <option value="sport" {{ (isset($user_detail) && $user_detail->genre == 'sport') ? 'selected' : '' }}>Sports</option>
                                            <option value="it" {{ (isset($user_detail) && $user_detail->genre == 'it') ? 'selected' : ''}}>IT-Information Technology</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="followers" class="col-3">Follower :</label>
                                    <div class="col-9">
                                        <input type="text" class="form-control form-control-sm" name="followers" value="{{ @$user_detail->userInfo->followers }}"}} >
                                        @error('followers')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="image" class="col-3">Image :</label>
                                    <div class="col-3">
                                        <input type="file" class="form-control form-control-sm" name="image" accept="image/*">
                                    </div>
                                    <div class="col-md-2">
                                            @if(@$user_detail->userInfo != null && @$user_detail->userInfo->image != null && file_exists(public_path().'/upload/user/'.$user_detail->userInfo->image) )
                                                <img src="{{ asset('upload/user/'.$user_detail->userInfo->image) }}" alt="">
                                            @else
                                                <img src="{{ asset('images/dummy.png') }}" class="img img-circle" style="width: 40px" alt="">
                                            @endif
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="offset-3 col-3">
                                        <button type="submit" class="btn btn-primary" id="submit">Submit</button>
                                        <button type="reset" class="btn btn-danger">Reset</button>
                                    </div>
                                </div>
                            </form>
            </div>
        </div>
    </div>
@endsection
