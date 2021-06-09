<?php

namespace App\Http\Controllers;

use App\Jobs\ActivateUser;
use Illuminate\Http\Request;
use App\Models\User;
use Hash;
use App\Models\UserInfo;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    protected $user = null;
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->user = $this->user->where('role', '!=', 'admin')->get();
        return view('admin.user.index')
            ->with('all_users', $this->user);
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
    public function store(Request $request)
    {
        $rules = $this->user->addUserRules();
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
        $this->user->fill($data);
        $status = $this->user->save();
        if($status){
            $this->user->userInfo = new UserInfo();
            $data['user_id'] = $this->user->id;
            $this->user->userInfo->fill($data);
            $this->user->userInfo->save();

            ActivateUser::dispatch($data);
            $request->session()->flash('success', 'User created successfully.');
        }else{
            $request->session()->flash('error', 'Sorry, there was error while creating user.');
        }
        return redirect()->route('user.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($type)
    {
        $this->user = $this->user->where('role', $type)->get();
        return view('admin.user.index')
            ->with('all_users', $this->user);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $this->validateId($id);
        return view('admin.user.form')
            ->with('user_detail', $this->user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validateId($id);
        $rules = $this->user->validateUserRules();
        $request->validate($rules);
        $data = $request->except('image', '_method', '_token');
        if($request->image){
            $image_name = uploadImage($request->image, "user", '600x300');
            if($image_name) {
                $data['image'] = $image_name;
                if ($this->user->userInfo != null) {
                    deleteImage($this->user->userInfo->image, 'user');
                }
            }
        }
        $this->user->fill($data);
        $status = $this->user->save();
        if($status){
            $data['user_id'] = $this->user->id;
            if($this->user->userInfo == null){
                $this->user->userInfo = new UserInfo();
            }
            $this->user->userInfo->fill($data);
            $this->user->userInfo->save();
            $request->session()->flash('success', 'User updated successfully.');
        }else{
            $request->session()->flash('error', 'Sorry, there was error while updating user.');
        }

        return redirect()->route('user.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->validateId($id);
        $image = $this->user->userInfo ? $this->user->userInfo->image : null;

        $del = $this->user->delete();
        if($del){
            if($image){
                deleteImage($image, 'user');
            }
            \request()->session()->flash('success', 'User deleted successfully.');
        }else{
            \request()->session()->flash('error', 'Sorry, there was error while deleting user.');
        }
        return redirect()->route('user.index');
    }

    public function validateId($id)
    {
        $this->user = $this->user->find($id);
        if(!$this->user){
            \request()->session()->flash('error', 'No user found.');
            return redirect()->back();
        }
    }

    public function activateUser($token)
    {
        dd($token);
        $this->user = $this->user->where('activation_token', $token)->findOrFail();
        $this->user->activation_token = null;
        $this->user->status = 'active';
        $status = $this->user->save();
        if($status){
            \request()->session()->flash('success', 'User activated successfully.Please login to continue.');
        }else{
            \request()->session()->flash('error', 'Sorry, there was error while activating user.');
        }
        return redirect()->route('login');
    }
}
