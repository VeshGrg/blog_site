<script src="{{ asset('js/jquery-3.5.1.min.js') }}"></script>
<script src="{{ asset('js/pagination.js') }}"></script>
<script src="{{ asset('js/bootstrap.min.js') }}"></script>

{{--<script>--}}
{{--    $('#comment-form').on('submit', function (e) {--}}
{{--        e.preventDefault();--}}

{{--        const fd = new FormData(this);--}}

{{--        $.ajax({--}}
{{--            method: "POST",--}}
{{--            url: '{{ route("blog-post", $articles) }}',--}}
{{--            data: {--}}
{{--                review: fd.get("review")--}}
{{--            },--}}
{{--            dataType: 'JSON',--}}
{{--            headers: {'X-CSRF-TOKEN': fd.get('_token')},--}}
{{--            success: function (response) {--}}

{{--                $("#article-review").prepend(response.data);--}}
{{--            },--}}
{{--            error: function (response) {--}}
{{--            }--}}
{{--        });--}}
{{--    });--}}
{{--    $('.example').rpmPagination({--}}
{{--        domElement:'.page-item',--}}
{{--        limit : 5,--}}
{{--        total: 0,--}}
{{--        link:'{{ route('article-detail', $articles) }}',--}}
{{--        refresh:true--}}

{{--    });--}}


{{--</script>--}}
</body>
</html>
