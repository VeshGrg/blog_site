<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use App\Models\Gallery;

class GalleryController extends Controller
{
    protected $gallery = null;
    public function __construct(Gallery $gallery)
    {
        $this->gallery = $gallery;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->gallery = $this->gallery->get();
        return view('admin.gallery.index')
            ->with('all_data', $this->gallery);
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
    public function store(Request $request)
    {
        $rules = $this->gallery->validateGallery();
        $data = $request->validate($rules);
        $data['user_id'] = $request->user()->id;
        $gallery_name = uploadImage($request->image, 'gallery', '600x400');
        if($gallery_name){
            $data['image'] = $gallery_name;
        }
        $this->gallery->fill($data);
        $status = $this->gallery->save();
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
    public function edit($id)
    {
        $this->validateId($id);
        return view('admin.gallery.form')
            ->with('gallery_detail', $this->gallery);
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
        $rules = $this->gallery->validateGallery();
        $data = $request->validate($rules);
        $data['user_id'] = $request->user()->id;
        $gallery_name = uploadImage($request->image, 'gallery', '600x400');
        if($gallery_name){
            $data['image'] = $gallery_name;
            if($this->gallery->image != null){
                deleteImage($this->gallery->image, 'gallery');
            }
        }
        $this->gallery->fill($data);
        $status = $this->gallery->save();
        if($status){
            $request->session()->flash('success', 'Gallery uploaded successfully.');
        }else{
            $request->session()->flash('Sorry, there was error while uploading gallery.');
        }
        return redirect()->route('list-gallery');

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
        $del = $this->gallery->delete();
        if($del) {
            if (\request()->image) {
                deleteImage(\request()->image, 'gallery');
            }
            \request()->session()->flash('success', 'Gallery deleted successfully.');
        }else{
            \request()->session()->flash('error', 'Sorry, there was error while deleting gallery.');
        }
        return redirect()->route('list-gallery');

    }

    public function image(Gallery $gallery)
    {
        return view('gallery.show', compact('gallery'));
    }

    private function validateId($id)
    {
        $this->gallery = $this->gallery->find($id);
        if(! $this->gallery){
            \request()->session()->flash('error', 'Sorry, no gallery found.');
            return redirect()->back();
        }
    }
}
