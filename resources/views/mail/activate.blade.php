<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>User Activation !!</title>
</head>
<body>
    <p><strong>Dear {{ $data['name'] }},</strong></p>
    <p><strong>Congratulation</strong>,Your account has been registered as <strong>{{ $data['role'] }}</strong>.</p>
    <p>To activate account, click on the link below</p>
    <p>
        <a href="{{ route('activate', $data['activation_token']) }}">{{ route('activate', $data['activation_token']) }}</a>
    </p>
    <br>
    <p>
        <strong>Username :</strong>{{ $data['email'] }}
    </p>
    <p>
        <strong>Password :</strong>{{ $data['new_pwd'] }}
    </p>
</body>
</html>
