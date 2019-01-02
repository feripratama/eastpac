@extends('layouts.app')

@section('css')
<style>
.status {
    padding: 40px 20px;
    border-radius: 4px;
    text-align: center;
    border: 1px solid #dce6f5;
}
.status-empty .status-icon {
    background: #eff6ff;
    border-color: #c8d8f0;
}

.status-icon {
    position: relative;
    height: 100px;
    width: 100px;
    background: #fff;
    border-radius: 50%;
    text-align: center;
    margin: 0 auto 10px;
/*    border: 2px solid #c8d8f0;*/
}

.imgicon{
    margin-top: 20%;
}

.btn-primary {
    background: #2b56f5;
    border-color: #2b56f5;
    box-shadow: 0px 2px 18px 2px rgba(43, 86, 245, 0.25);
}
</style>
@endsection

@section('content')
<section class="content">
    <div class="row">
        <div class="col-sm-12" style="margin-top: 10px">
            <div class="box box-warning">
                <div class="box-header with-border">
                    <h2 class="box-title">Identity Verification - KYC</h2>
                    <div class="box-body">
                        <form action="{{ route('home.kycapp.store') }}" method="POST" enctype="multipart/form-data">
                        {{ csrf_field() }}
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputFile">File input</label>
                                <input type="file" id="exampleInputFile" name="document_file">
                                <p class="help-block">Example block-level help text here.</p>
                            </div>
                            <div class="checkbox">
                                <label>
                                <input type="checkbox"> Check me out
                                </label>
                            </div>
                            <button type="submit" class="btn btn-default">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection

@section('script')

@endsection
