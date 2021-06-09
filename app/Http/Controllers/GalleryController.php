<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\PostReview;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Gallery;
use Illuminate\Support\Facades\Gate;

class GalleryController extends Controller
{

    public function __construct()
    {
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Gallery $gallery)
    {
        $gallery = Gallery::get();
        return view('admin.gallery.index')
            ->with('all_data', $gallery);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.gallery.form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Gallery $gallery)
    {
        $rules = $gallery->validateGallery();
        $data = $request->validate($rules);
        $data['user_id'] = $request->user()->id;
        $gallery_name = uploadImage($request->image, 'gallery', '600x400');
        if($gallery_name){
            $data['image'] = $gallery_name;
        }
        $gallery->fill($data);
        $status = $gallery->save();
        if($status){
            $request->session()->flash('success', 'Gallery added successfully.');
        }else{
            $request->session()->flash('Sorry, there was error while adding gallery.');
        }
        return redirect()->route('list-gallery');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article, Gallery $gallery)
    {
        $this->authorize('update', $gallery);
        return view('admin.gallery.form')
            ->with('gallery_detail',$gallery);
    }

    public function update(Request $request, Gallery $gallery)
    {
        $gallery = Gallery::findOrFail($gallery->id);
        $rules = $gallery->validateGallery();
        $request->validate($rules);
        $data = $request->all();
        $gallery->fill($data);
        $gallery->save();
        return redirect()->route('list-gallery')
            ->withSuccess('Gallery updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gallery $gallery)
    {
        Gate::authorize('delete', $gallery);
        $gallery = Gallery::findOrFail($gallery->id);
        $gallery->delete();
        return redirect()->route('list-gallery')
            ->withSuccess('Gallery deleted successfully.');

    }

}
