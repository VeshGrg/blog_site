<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="{{ route('landing') }}" target="_new" class="brand-link">
        <span class="brand-text font-weight-light">HAMRO BLOG</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="{{ asset('images/dummy.png') }}" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <a href="{{ route(auth()->user()->role) }}" class="d-block">{{ ucfirst(auth()->user()->name) }}</a>
            </div>
        </div>
        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                     with font-awesome or any other icon font library -->
                <li class="nav-item has-treeview menu-open">
                    <a href="{{ route('landing') }}" class="nav-link {{ Request::path() == '/' ? 'active' : '' }}">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                            Dashboard
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                </li>
                <li class="nav-item has-treeview menu-open">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-chart-pie"></i>
                        <p>
                            Articles/Blog
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('articles') }}" class="nav-link {{ request()->is('articles') ? 'active' : '' }}">
                                <i class="far fa-circle nav-icon"></i>
                                <p>List Articles</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('new-article') }}" class="nav-link {{ request()->is('articles/create') ? 'active' : '' }}">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Add Article</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-chart-pie"></i>
                        <p>
                            User
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('user.index') }}" class="nav-link {{ Request::path() == 'user' ? 'active' : '' }}">
                                <i class="far fa-circle nav-icon"></i>
                                <p>List Users</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('user.show', 'blogger') }}" class="nav-link {{ Request::path() == 'user/blogger' ? 'active' : '' }}">
                                <i class="far fa-circle nav-icon"></i>
                                <p>List Bloggers</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('user.show', 'reader') }}" class="nav-link {{ Request::path() == 'user/reader' ? 'active' : '' }}">
                                <i class="far fa-circle nav-icon"></i>
                                <p>List Readers</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('user.create') }}" class="nav-link {{ Request::path() == 'user/create' ? 'active' : '' }}">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Add User</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-chart-pie"></i>
                        <p>
                            Gallery
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('list-gallery') }}" class="nav-link {{ Request::path() == 'galleries' ? 'active' : '' }}">
                                <i class="far fa-circle nav-icon"></i>
                                <p>List Gallery</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('create-gallery') }}" class="nav-link {{ Request::path() == 'gallery/create' ? 'active' : '' }}">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Add Gallery</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item has-treeview menu-open">
                    <a href="{{ route('list-review') }}" class="nav-link {{ Request::path() == 'reviews' ? 'active' : '' }}">
                        <i class="nav-icon fas fa-chart-pie"></i>
                        <p>
                            PostReview
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
