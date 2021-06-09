@extends('layouts.blogger')
@section('content')
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container">

                <div class="row">
                    <div class="col-12">
                        <h3>Add an Article</h3>
                    </div>
                </div>
                <br>
                {{ $errors }}
                @if(isset($article_detail))
                    <form action="{{ route('blogger-update', $article_detail->id) }}" method="POST" enctype="multipart/form-data">
                        @method('patch')

                        @else
                    <form action="{{ route('blogger-submit') }}" method="POST" enctype="multipart/form-data">
                    @endif
                        @csrf
                    <div class="form-group row">
                        <label for="title" class="col-3">Title :</label>
                        <div class="col-9">
                            <input type="text" class="form-control form-control-sm" name="title" value="{{ @$article_detail->title }}"}} placeholder="Enter Title here." required>
                            @error('title')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="name" class="col-3">Blogger Name :</label>
                        <div class="col-9">
                            <input type="text" class="form-control form-control-sm" name="name" value="{{ @$article_detail->name }}" required placeholder="Enter Blogger Name here.">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="genre" class="col-3">Genre/Category :</label>
                        <div class="col-9">
                            <select name="genre" id="genre" class="form-control form-control-sm">
                                <option value="entertainment" {{ (isset($article_detail) && $article_detail->genre == 'entertainment') ? 'selected' : '' }}>Entertainment</option>
                                <option value="sport" {{ (isset($article_detail) && $article_detail->genre == 'sport') ? 'selected' : '' }}>Sports</option>
                                <option value="it" {{ (isset($article_detail) && $article_detail->genre == 'it') ? 'selected' : ''}}>IT-Information Technology</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="summary" class="col-3">Summary :</label>
                        <div class="col-9">
                            <textarea name="summary" id="" rows="2" class="form-control" required placeholder="Enter Summary here.">{{ @$article_detail->summary }}</textarea>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="genre" class="col-3">Description :</label>
                        <div class="col-9">
                            <textarea name="description" id="summernote" rows="15" style="resize: none" class="form-control" required placeholder="Enter Description here.">{{ @$article_detail->description }}</textarea>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="is_featured" class="col-3">Is Featured :</label>
                        <div class="col-3">
                            <input type="checkbox" name="is_featured" value=1 {{ (isset($article_detail) && $article_detail->is_featured == 1) ? 'checked' : '' }} >
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="image" class="col-3">Image :</label>
                        <div class="col-3">
                            <input type="file" class="form-control form-control-sm" name="image" accept="image/*">
                        </div>
                        @if(isset($article_detail))
                            <div class="col-md-1">
                                <img src="{{ asset('upload/article/'.$article_detail->image) }}" alt="">
                            </div>
                            @endif
                    </div>

                    <div class="form-group row">
                        <div class="offset-3 col-3">
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <button type="reset" class="btn btn-danger">Reset</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
@endsection
