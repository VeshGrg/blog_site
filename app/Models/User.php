<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'status',
        'role',
        'password',
        'activation_token'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function userInfo(){
        return $this->hasOne('App\Models\UserInfo', 'user_id', 'id');
    }

    public function addUserRules($act = 'add')
    {
        $rules = [
            'name' => 'required|string|max:50',
            'email' => 'required|email|unique:users,email',
            'status' => 'required|in:active,inactive',
            'role' => 'required|in:blogger,reader',
            'password' => 'required|string|min:8|confirmed',
            'phone' => 'nullable|string',
            'address' => 'nullable|string',
            'genre' => 'required|in:entertainment,sport,it',
            'followers' => 'nullable|string',
            'image' => ($act == 'add' ? 'required|' : 'sometimes|').'image|max:5000'
        ];
        return $rules;
    }

    public function validateUserRules(){
        return [
            'name' => 'required|string|max:50',
            'phone' => 'nullable|string',
            'address' => 'nullable|string',
            'genre' => 'required|in:entertainment,sport,it',
            'followers' => 'nullable|string',
            'image' => 'sometimes|image|max:5000'
        ];
    }

    public function receivesBroadcastNotificationsOn()
    {
        return "users.{$this->id}";
    }

}
