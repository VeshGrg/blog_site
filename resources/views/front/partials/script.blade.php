<script src="{{ asset('js/jquery-3.5.1.min.js') }}"></script>
<script src="{{ asset('js/bootstrap.min.js') }}"></script>
<script>
    $('#comment-form').on('submit', function(e) {
        e.preventDefault();
        const fd = new FormData(this);

        $.ajax({
            method: "POST",
            url: '{{ route("blog-post") }}',
            formData: fd,
            headers: {'X-CSRF-TOKEN': fd.get('_token')},
            success: function(response) {
                console.log(response);
                // if(typeof(response) != "object"){
                //     response = JSON.parse(response)
                // }
                // $("body").append("<div>"+response+"</div>");
            }
        });
    });
</script>
</body>
</html>
