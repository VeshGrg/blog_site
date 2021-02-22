<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return redirect()->route(auth()->user()->role);
    }

    public function front()
    {
        return view('front.index');
    }

    public function detail()
    {
        return view('front.blog-detail');
    }

    public function admin()
    {
        return view('admin.index');
    }

    public function blogger()
    {
        return view('home');
    }

    public function reader()
    {
        return view('home');
    }
}
