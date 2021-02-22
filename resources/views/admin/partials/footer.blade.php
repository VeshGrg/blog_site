<!-- jQuery -->
<script src="{{ asset('plugins/jquery/jquery.min.js') }}"></script>
<!-- jQuery UI 1.11.4 -->
<script src="{{ asset('plugins/jquery-ui/jquery-ui.min.js') }}"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
    $.widget.bridge('uibutton', $.ui.button)
</script>
<!-- Bootstrap 4 -->
<script src="{{ asset('plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<!-- ChartJS -->
<script src="{{ asset('plugins/chart.js/Chart.min.js') }}"></script>
<!-- Sparkline -->
<script src="{{ asset('plugins/sparklines/sparkline.js') }}"></script>
<!-- JQVMap -->
{{--<script src="{{ asset('plugins/jqvmap/jquery.vmap.min.js') }}"></script>--}}
{{--<script src="{{ asset('plugins/jqvmap/maps/jquery.vmap.usa.js') }}"></script>--}}
<!-- jQuery Knob Chart -->
<script src="{{ asset('plugins/jquery-knob/jquery.knob.min.js') }}"></script>
<!-- daterangepicker -->
<script src="{{ asset('plugins/moment/moment.min.js') }}"></script>
<script src="{{ asset('plugins/daterangepicker/daterangepicker.js') }}"></script>
<!-- Tempusdominus Bootstrap 4 -->
<script src="{{ asset('plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js') }}"></script>
<!-- Summernote -->
<script src="{{ asset('plugins/summernote/summernote-bs4.min.js') }}"></script>
<!-- overlayScrollbars -->
<script src="{{ asset('plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js') }}"></script>
<!-- AdminLTE App -->
<script src="{{ asset('dist/js/adminlte.js') }}"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<script src="{{ asset('dist/js/pages/dashboard.js') }}"></script>
<!-- AdminLTE for demo purposes -->
<script src="{{ asset('dist/js/demo.js') }}"></script>
<script src="//cdn.datatables.net/1.10.23/js/jquery.dataTables.min.js"></script>
<script src="{{ asset('plugins/lightbox2/dist/js/lightbox.min.js') }}"></script>
<script>
    $(document).ready(function() {
        setTimeout(function(){
            $('.alert').slideUp();
        }, 3000);

        $('.delete-article').click(function(){
            let id = $(this).data('id');
            let confirmed = confirm("Are you sure you want to delete data?");
            if(confirmed){
                $("#delete-form-"+id).submit();
            }
        });

        $('#myTable').DataTable();
        $(document).on('keyup', '#password_confirmation', function(e){
            let pass = $('#password').val();
            let re_pass = $(this).val();
            if(pass != re_pass){
                $('#error_password').html('Sorry, password and retype password does not match.');
                $('#submit').attr('disabled', 'disabled');
            }else{
                $('#error_password').html('');
                $('#submit').removeAttr('disabled', 'disabled');
            }
            console.log(this);
        });

    });

</script>
</body>
</html>
