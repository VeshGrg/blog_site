@include('admin.partials.top-header')
<div class="wrapper">

    @include('admin.partials.header-menu')
    <!-- Content Wrapper. Contains page content -->
    @include('admin.partials.sidebar')
        @include('admin.partials.notify')
    @yield('content')
    <!-- /content-wrapper -->
    @include('admin.partials.copyright')
</div>
    @include('admin.partials.footer')
