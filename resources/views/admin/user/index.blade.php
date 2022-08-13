@extends('layouts.admin')
@section('title', 'User Page')
@section('content')
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-10">
                        <h3>User List</h3>
                    </div>

                    <div class="col-2">
                        <a href="{{ route('user.create') }}" class="btn btn-sm btn-success"><i class="fa fa-plus"></i>Create User</a>
                    </div>
                </div>
                <br>

                <div class="row">
                    <div class="col-12">
                        <table class="table table-striped table-hover" id="myTable">
                            <thead>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Genre</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Image</th>
                            <th>Action</th>
                            </thead>
                            @if($all_users->count())
                                @foreach($all_users as $user_data)
                                    <tr>
                                        <td>{{ $user_data->name }}</td>
                                        <td>{{ $user_data->email }}</td>
                                        <td>{{ $user_data->role }}</td>
                                        <td>{{ $user_data->userInfo != null ? $user_data->userInfo->genre : '' }}</td>
                                        <td>{{ $user_data->userInfo != null ? $user_data->userInfo->phone : '' }}</td>
                                        <td>{{ $user_data->userInfo != null ? $user_data->userInfo->address : '' }}</td>
                                        <td>{{ $user_data->status }}</td>
                                        <td>
                                            @if($user_data->userInfo != null)
                                                <a href="{{ asset('upload/user/'.$user_data->userInfo->image) }}" data-lightbox="'User-'.$user_data->id" data-title="image">
                                                    Show</a></td>
                                            @endif
                                        <td>
                                            <a href="{{ route('user.edit', $user_data) }}">Edit</a>
                                            /
                                            {{ Form::open(['url'=>route('user.destroy', $user_data->id), 'id' => "delete-form-".$user_data->id]) }}

                                            @method('delete')
                                            <a href="#" data-id="{{ $user_data->id }}" class="delete-article">Delete</a>
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
