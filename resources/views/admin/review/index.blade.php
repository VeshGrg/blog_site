@extends('layouts.admin')
@section('content')
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-10">
                        <h3>PostReview Detail</h3>
                    </div>
                </div>
                <br>

                <div class="row">
                    <div class="col-12">
                        <table class="table table-striped table-hover" id="myTable">
                            <thead>
                            <th>Article</th>
                            <th>Review</th>
                            <th>Created By</th>
                            <th>Action</th>
                            </thead>
                            @if($reviews->count())
                                @foreach($reviews as $review_data)
                                    <tr>
                                        <td>{{ $review_data->getArticle->title }}</td>
                                        <td>{{ $review_data->review }}</td>
                                        <td>{{ $review_data->getUser->name }}</td>
                                        <td>{{ Form::open(['url'=>route('delete-review', $review_data->id), 'id' => "delete-form-".$review_data->id]) }}

                                        @method('delete')
                                        <a href="#" data-id="{{ $review_data->id }}" class="delete-article">Delete</a>
                                        {{ Form::close() }}</td>
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
