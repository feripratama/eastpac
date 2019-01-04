@extends('layouts.app')

@section('content')

<section class="content">
    <div class="row">
        <div class="col-md-12">
            <div class="box box-default">
                <div class="box-header with-border">
                    <i class="fa fa-bullhorn"></i>

                    <h3 class="box-title">{{ __('Verify Your Email Address') }}</h3>
                </div>
                <div class="box-body">
                    <div class="callout callout-warning">
                        <h4>Notice</h4>
                        @if (session('resent'))
                            <div class="alert alert-success" role="alert">
                                {{ __('A fresh verification link has been sent to your email address.') }}
                            </div>
                        @endif
                        <p>
                            {{ __('Before proceeding, please check your email for a verification link.') }}
                            {{ __('If you did not receive the email') }}, <a href="{{ route('verification.resend') }}">{{ __('click here to request another') }}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection


