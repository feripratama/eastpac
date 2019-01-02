@extends('layouts.app')

@section('content')
<!-- Content Wrapper. Contains page content -->
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
        {{ $title }}
        </h1>
        <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">admin</a></li>
        <li class="active">{{ $title }}</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box box-warning">
                    <div class="box-header with-border">
                    <h3 class="box-title">Users</h3>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                    <table class="table table-bordered">
                        <tr>
                            <th style="width: 10px">#</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Verified</th>
                            <th style="width: 100px">Action</th>
                        </tr>
                        @php
                            $no = 1;
                        @endphp
                        @foreach($users as $user)
                        <tr>
                            <td>{{ $no++ }}</td>
                            <td>{{ $user->name }}</td>
                            <td>{{ $user->username }}</td>
                            <td>{{ $user->email }}</td>
                            <th>
                                @if(is_null($user->email_verified_at))
                                    <i class="fa fa-ban" style="color:red"></i>
                                @else
                                    <i class="fa fa-check" style="color:green"></i>
                                @endif
                            </th>
                            <td>
                                <a href="{{ route('admin.usermanage.show', $user->id) }}" class="btn btn-sm btn-primary" title="view detail"> <i class="fa fa-eye"></i> </a>
                                <button class="btn btn-sm btn-danger" title="ban user"> <i class="fa fa-ban"></i> </button>
                            </td>
                        </tr>
                        @endforeach
                    </table>
                    </div>
                    <!-- /.box-body -->
                    <div class="box-footer clearfix">
                    {{-- <ul class="pagination pagination-sm no-margin pull-right">
                        <li><a href="#">&laquo;</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">&raquo;</a></li>
                    </ul> --}}
                    {{ $users->links() }}
                    </div>
                </div>
                </div>
            </div>
        </div>
        <!-- /.box -->

    </section>
    <!-- /.content -->
    <!-- /.content-wrapper -->
@endsection

@section('script')

<script>
    $('.pagination').addClass('pagination-sm no-margin pull-right');
</script>

@endsection
