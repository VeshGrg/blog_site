
    <!-- Content Header (Page header) -->
    @if(session('success'))
        <div class="offset-2 col-md-10 col-sm-10">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                                <div class="alert alert-success alert-bordered alert-dismissable fade show">
                                    <button class="close" data-dismiss="alert" aria-label="Close">×</button>
                                    {{ session('success') }}
                                </div>
                        </div>
                    </div>
                </div>
        </div>
        @endif

    @if(session('error'))
        <div class="offset-2 col-md-10 col-sm-10">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="alert alert-danger alert-bordered alert-dismissable fade show">
                                <button class="close" data-dismiss="alert" aria-label="Close">×</button>
                                {{ session('error') }}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    @endif

    @if(session('warning'))
        <div class="offset-2 col-md-10 col-sm-10">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="alert alert-warning alert-bordered alert-dismissable fade show">
                                <button class="close" data-dismiss="alert" aria-label="Close">×</button>
                                {{ session('warning') }}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    @endif
