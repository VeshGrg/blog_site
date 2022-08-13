@extends('layouts.admin')
@section('content')
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-12">
                        <h3>Add Video</h3>
                    </div>
                </div>
                <br>
                @if(isset($article_detail))
                    <form action="{{ route('update', $article_detail->id) }}" method="POST" enctype="multipart/form-data">
                        @method('patch')

                        @else
                            <form action="{{ route('add-video') }}" method="POST" enctype="multipart/form-data">

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
                                    <label for="vid-url" class="col-3">Video_link :</label>
                                    <div class="col-9">
                                        <input type="link" class="form-control form-control-sm" name="vid-url" value="{{ @$article_detail->video_link }}" required placeholder="Enter Video url here.">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="vid-id" class="col-3">Video_Id :</label>
                                    <div class="col-9">
                                        <input type="link" class="form-control form-control-sm" name="vid-id" value="{{ @$article_detail->video_id }}" required placeholder="Enter Video id here.">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="status" class="col-3">Status :</label>
                                    <div class="col-9">
                                        <select name="status" id="status" class="form-control form-control-sm">
                                            <option value="active" {{ (isset($article_detail) && $article_detail->status == 'active') ? 'selected' : '' }}>Active</option>
                                            <option value="inactive" {{ (isset($article_detail) && $article_detail->status == 'inactive') ? 'selected' : '' }}>Inactive</option>
                                        </select>
                                    </div>
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
