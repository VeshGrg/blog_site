@include('partials.top-header')
<div class="wrapper">
        @include('partials.header-menu')
        <!-- Content Wrapper. Contains page content -->
        @include('partials.sidebar')
            @include('partials.notify')
        @yield('content')
        <!-- /content-wrapper -->
        @include('partials.copyright')
</div>
    @include('partials.footer')
