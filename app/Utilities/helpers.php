<?php

    function uploadImage($image, $dir, $thumb = null){
        $path = public_path().'/upload/'.$dir;
        if(!File::exists($path)){
            File::makeDirectory($path, 0777, true, true);
        }
        $file_name = ucfirst($dir)."-".date('YmdHis').rand(0,9999).".".$image->getClientOriginalExtension();
        $status = $image->move($path, $file_name);
        if($status){
            if($thumb !== null){
                list($width, $height) = explode('x', $thumb);
                Image::make($path.'/'.$file_name)->resize($width,$height, function($constraint){
                    return $constraint->aspectRatio();
                } )->save($path.'/'.$file_name);
            }
            return $file_name;
        }else{
            return null;
        }
}

    function deleteImage($image, $dir){
        $path = public_path().'/upload/'.$dir;
        if(!empty($image) && file_exists($path.'/'.$image) ){
            unlink($path.'/'.$image);
        }

    }
