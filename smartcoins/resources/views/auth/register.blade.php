@if(Auth::guest())
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>AdminLTE 2 | Registration Page</title>
<!-- Tell the browser to be responsive to screen width -->
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
<!-- Bootstrap 3.3.7 -->
<link rel="stylesheet" href="{{asset('bower_components/bootstrap/dist/css/bootstrap.min.css')}}">
<!-- Font Awesome -->
<link rel="stylesheet" href="{{asset('bower_components/font-awesome/css/font-awesome.min.css')}}">
<!-- Ionicons -->
<link rel="stylesheet" href="{{asset('bower_components/Ionicons/css/ionicons.min.css')}}">
<!-- Theme style -->
<link rel="stylesheet" href="{{asset('dist/css/AdminLTE.min.css')}}">
<!-- iCheck -->
<link rel="stylesheet" href="{{asset('plugins/iCheck/square/blue.css')}}">

<!-- Google Font -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
</head>
<body class="hold-transition register-page">
<div class="register-box">
<div class="register-logo">
    <a href="{{ route('welcome') }}"><b>Admin</b>LTE</a>
</div>

<div class="register-box-body">
    <p class="login-box-msg">Register a new membership</p>

    <form action="{{ route('register') }}" method="post">
        {{ csrf_field() }}
        <div class="form-group {{ $errors->has('name') ? ' has-error' : 'has-feedback' }}">
            <input type="text" class="form-control" name="name" placeholder="Full name" value="{{ old('name') }}">
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
            @if ($errors->has('name'))
                <span class="help-block">
                    <strong>{{ $errors->first('name') }}</strong>
                </span>
            @endif
        </div>
        <div class="form-group {{ $errors->has('username') ? ' has-error' : 'has-feedback' }}">
            <input type="text" class="form-control" name="username" placeholder="User ID" value="{{ old('username') }}">
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
            @if ($errors->has('username'))
                <span class="help-block">
                    <strong>{{ $errors->first('username') }}</strong>
                </span>
            @endif
        </div>
        <div class="form-group {{ $errors->has('mobilenumber') ? ' has-error' : 'has-feedback' }}">
            <input type="text" class="form-control" name="mobilenumber" placeholder="Mobile Phone Number" value="{{ old('mobilenumber') }}">
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
            @if ($errors->has('mobilenumber'))
                <span class="help-block">
                    <strong>{{ $errors->first('mobilenumber') }}</strong>
                </span>
            @endif
        </div>
        <div class="form-group {{ $errors->has('email') ? ' has-error' : 'has-feedback' }}">
            <input type="email" class="form-control" name="email" placeholder="Email" value="{{ old('email') }}">
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            @if ($errors->has('email'))
                <span class="help-block">
                    <strong>{{ $errors->first('email') }}</strong>
                </span>
            @endif
        </div>
        <div class="form-group {{ $errors->has('password') ? ' has-error' : 'has-feedback' }}">
            <input type="password" class="form-control" name="password" placeholder="Password">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            @if ($errors->has('password'))
                <span class="help-block">
                    <strong>{{ $errors->first('password') }}</strong>
                </span>
            @endif
        </div>
        <div class="form-group {{ $errors->has('password') ? ' has-error' : 'has-feedback' }}">
            <input type="password" class="form-control" name="password_confirmation" placeholder="Password Confirmation">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="row">

            <div class="form-group row">
            <label for="avatar" class="col-md-4 col-form-label text-md-right">{{ __('Avatar (optional)') }}</label>

            <div class="col-md-6">
                <input id="avatar" type="file" class="form-control" name="avatar">
            </div>
        </div>
            <!-- /.col -->
            <div class="col-xs-4">
                <button type="submit" class="btn btn-primary btn-block btn-flat">Register</button>
            </div>
            <div class="col-xs-3">
                <a href="{{ url('/') }}" class="btn btn-warning btn-block btn-flat">Back</a>
            </div>

            <!-- /.col -->
        </div>
    </form>

    <a href="{{ route('login') }}" class="text-center">I already have a membership</a>
</div>
<!-- /.form-box -->
</div>
<!-- /.register-box -->

<!-- jQuery 3 -->
<script src="{{asset('bower_components/jquery/dist/jquery.min.js')}}"></script>
<!-- Bootstrap 3.3.7 -->
<script src="{{asset('bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>
<!-- iCheck -->
<script src="{{asset('plugins/iCheck/icheck.min.js')}}"></script>
<script>
</script>
</body>
</html>
@else
    @php Redirect::to('/') @endphp
@endif