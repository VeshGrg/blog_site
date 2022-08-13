@extends('layouts.admin')
@section('content')
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-12">
                        <h3>Add Gallery</h3>
                    </div>
                </div>
                <br>
                @if(isset($gallery_detail))
                    <form action="{{ route('update-gallery', $gallery_detail->id) }}" method="POST" enctype="multipart/form-data">
                        @method('patch')

                        @else
                            <form action="{{ route('add-gallery') }}" method="POST" enctype="multipart/form-data">
                                @endif
                                @csrf
                                <div class="form-group row">
                                    <label for="title" class="col-3">Title :</label>
                                    <div class="col-9">
                                        <input type="text" class="form-control form-control-sm" name="title" value="{{ @$gallery_detail->title }}"}} placeholder="Enter Title here." required>
                                        @error('title')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="status" class="col-3">Status :</label>
                                    <div class="col-9">
                                        <select name="status" id="status" class="form-control form-control-sm">
                                            <option value="active" {{ (isset($gallery_detail) && $gallery_detail->status == 'active') ? 'selected' : '' }}>Active</option>
                                            <option value="inactive" {{ (isset($gallery_detail) && $gallery_detail->status == 'inactive') ? 'selected' : '' }}>Inactive</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="image" class="col-3">Image :</label>
                                    <div class="col-2">
                                        <input type="file" class="form-control form-control-sm" name="image" accept="image/*" multiple value="{{ @$gallery_detail->image }}" required>
                                    </div>
                                    @if(isset($gallery_detail))
                                        <div class="col-md-1">
                                            <img src="{{ asset('upload/gallery/'.$gallery_detail->image) }}" width="100%" alt="">
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
