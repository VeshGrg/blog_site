<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Reader
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if($request->user()->role == 'reader'){
            return $next($request);
        }else{
            return redirect()->route($request->user()->role);
        }
    }
}
