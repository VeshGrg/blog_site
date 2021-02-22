<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Hash;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = array(
            array(
                'name' => 'Admin User',
                'role' => 'admin',
                'email' => 'admin@hamroblog.com',
                'password' => Hash::make('admin123'),
                'status' => 'active'
            ),
            array(
                'name' => 'Blogger User',
                'role' => 'blogger',
                'email' => 'blogger@hamroblog.com',
                'password' => Hash::make('blogger123'),
                'status' => 'active'
            ),
            array(
                'name' => 'Reader User',
                'role' => 'reader',
                'email' => 'reader@hamroblog.com',
                'password' => Hash::make('reader123'),
                'status' => 'active'
            )
        );
        foreach ($users as $user_data){
            if(User::where('email', $user_data['email'])->count() <= 0){
                $user = new User;
                $user->fill($user_data);
                $user->save();
            }
        }
    }
}
