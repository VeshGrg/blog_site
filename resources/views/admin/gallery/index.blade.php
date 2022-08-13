@extends('layouts.admin')
@section('content')
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-10">
                        <h3>Gallery Detail</h3>
                    </div>

                    <div class="col-2">
                        <a href="{{ route('create-gallery') }}" class="btn btn-sm btn-success"><i class="fa fa-plus"></i>Add Gallery</a>
                    </div>
                </div>
                <br>

                <div class="row">
                    <div class="col-12">
                        <table class="table table-striped table-hover" id="myTable">
                            <thead>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Image</th>
                            <th>Created By</th>
                            <th>Action</th>
                            </thead>
                            @if($all_data->count())
                                @foreach($all_data as $article_data)
                                    <tr>
                                        <td>{{ $article_data->title }}</td>
                                        <td>{{ $article_data->status }}</td>
                                        <td><a href="{{ asset('upload/gallery/'.$article_data->image) }}" data-lightbox="'Article-'.$article_data->id" data-title="image">Preview</a></td>
                                        <td>{{ $article_data->createdBy->name }}</td>
                                        <td>
                                            <a href="{{ route('edit-gallery', $article_data->id) }}">Edit</a>
                                            /
                                            {{ Form::open(['url'=>route('delete-gallery', $article_data->id), 'id' => "delete-form-".$article_data->id]) }}
                                            @method('delete')
                                            <a href="#" data-id="{{ $article_data->id }}" class="delete-article">Delete</a>
                                            {{ Form::close() }}
                                        </td>
                                    </tr>
                                @endforeach
                            @endif
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
