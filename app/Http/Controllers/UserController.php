<?php

namespace App\Http\Controllers;

use App\Jobs\ActivateUser;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserInfo;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct()
    {
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $user = User::where('role', '!=', 'admin')->get();
        return view('admin.user.index')
            ->with('all_users', $user);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.user.form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        $rules = $user->addUserRules();
        $request->validate($rules);
        $image_name = uploadImage($request->image, 'user', '600x300');
        $data = $request->except('image', 'password', 'password_confirmation');
        if($image_name){
            $data['image'] = $image_name;
        }
        $data['password'] = Hash::make($request->password);
        $data['new_pwd'] = $request->password;
        $data['status'] = 'inactive';
        $random = \Str::random(100);
        $data['activation_token'] = $random;
        $user->fill($data);
        $status = $user->save();
        if($status){
            $user->userInfo = new UserInfo();
            $data['user_id'] = $this->user->id;
            $user->userInfo->fill($data);
            $user->userInfo->save();

            ActivateUser::dispatch($data);
        }
        return redirect()->route('user.index')
            ->withSuccess('User added successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($type, User $user)
    {
        $user = User::where('role', $type)->get();
        return view('admin.user.index')
            ->with('all_users', $user);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        if (Gate::forUser($user)->allows('update', $user)) {
            // The user can update the post...
            $user = User::findOrFail($user->id);
            return view('admin.user.form')
                ->with('user_detail', $user);
        }
        abort(403);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $user = User::findOrFail($user->id);
        $rules = $user->validateUserRules();
        $request->validate($rules);
        $data = $request->except('image', '_method', '_token');
        if($request->image){
            $image_name = uploadImage($request->image, "user", '600x300');
            if($image_name) {
                $data['image'] = $image_name;
                if ($user->userInfo != null) {
                    deleteImage($user->userInfo->image, 'user');
                }
            }
        }
        $user->fill($data);
        $status = $user->save();
        if($status){
            $data['user_id'] = $user->id;
            if($user->userInfo == null){
                $user->userInfo = new UserInfo();
            }
            $user->userInfo->fill($data);
            $user->userInfo->save();
        }

        return redirect()->route('user.index')
            ->withSuccess('User updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        if (Gate::forUser($user)->allows('delete', $user)) {
            // The user can update the post...
            $user->delete();
            return redirect()->route('user.index')
                ->withSuccess('User deleted successfully');
        }
        abort(403);

    }

    public function activateUser($token, User $user)
    {
        $user = User::where('activation_token', $token)->findOrFail();
        $user->activation_token = null;
        $user->status = 'active';
        $user->save();
        return redirect()->route('login')
            ->withSuccess('User activated successfully');
    }
}
