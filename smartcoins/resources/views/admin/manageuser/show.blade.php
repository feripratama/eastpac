@extends('layouts.app')

@section('content')
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
        {{ $title }}
        </h1>
        <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">admin</a></li>
        <li><a href="{{ route('admin.usermanage') }}">manage user</a></li>
        <li class="active">{{ $title }}</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-md-6">
                <div id="msg" class="alert text-center" style="display:none">
                    <strong></strong>
                </div>
                <div class="box">
                    <div class="box-header with-border">
                    <h3 class="box-title">User Info</h3>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body box-profile">
                        <div class="col-md-12">
                            <ul class="list-group list-group-unbordered">
                                <li class="list-group-item">
                                    <b>Full name</b> <a class="pull-right" id="fullname">{{$user->name}}</a>
                                </li>
                                <li class="list-group-item">
                                    <b>Username</b> <a class="pull-right" id="username">{{$user->username}}</a>
                                </li>
                                <li class="list-group-item">
                                    <b>Email</b> <a class="pull-right" id="email">{{$user->email}}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- /.box-body -->
                    <div class="box-footer clearfix"></div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="box">
                    <div class="box-header with-border">
                    <h3 class="box-title">User Roles / Permissions</h3>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body box-profile">
                        <div class="col-md-12">
                            <table class="table table-bordered">
                                <tr>
                                    <th style="width: 10px">#</th>
                                    <th>Role</th>
                                    <th style="width: 40px">Action</th>
                                </tr>
                                @php
                                    $no = 1;
                                @endphp
                                @foreach($user->getRoleNames() as $role)
                                <tr>
                                    <td>{{ $no++ }}</td>
                                    <td>{{ $role }}</td>
                                    <td>
                                        <button class="btn btn-xs btn-danger" title="remove role"> <i class="fa fa-times"></i> </button>
                                    </td>
                                </tr>
                                @endforeach
                                <tr>
                                    <td></td>
                                    <td><b> Add Role </b></td>
                                    <td>
                                        <button class="btn btn-xs btn-success" title="remove permission"> <i class="fa fa-plus"></i></button>
                                    </td>
                                </tr>
                            </table>
                            <table class="table table-bordered" id="permission-table">
                                <tr>
                                    <th style="width: 10px">#</th>
                                    <th>Permission</th>
                                    <th style="width: 40px">Action</th>
                                </tr>
                                @php
                                    $no = 1;
                                @endphp
                                @foreach($user->getAllPermissions() as $permission)
                                <tr>
                                    <td> <i class="fa fa-circle-o" style="color:green;"></i> </td>
                                    <td>{{ $permission->name }}</td>
                                    <td>
                                        <button class="btn btn-xs btn-danger" title="remove permission"> <i class="fa fa-times"></i> </button>
                                    </td>
                                </tr>
                                @endforeach
                                <tr id="new-permission">

                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <b>  Add permission </b>
                                        <div class="" id="add-permission" style="display:none">
                                            <select class="form-control" id="permission-select">
                                                <option>-Select permission-</option>
                                                @foreach(Spatie\Permission\Models\Permission::all() as $permissions)

                                                    <option value="{{$permissions->id}}|{{$permissions->name}}">{{$permissions->name}}</option>

                                                @endforeach
                                            </select>
                                            <br>
                                            <button type="submit" class="btn btn-success btn-sm" id="btnok-add-permission">add</button>
                                            <button type="submit" class="btn btn-danger btn-sm" id="btncancel-add-permission">Cancel</button>
                                        </div>
                                    </td>
                                    <td>
                                        <button class="btn btn-xs btn-success" title="remove permission" id="btn-add-permission"> <i class="fa fa-plus"></i></button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <!-- /.box-body -->
                    <div class="box-footer clearfix"></div>
                </div>
            </div>
        </div>
        <!-- /.box -->

    </section>
    <!-- /.content -->
</div>
    <!-- /.content-wrapper -->
@endsection

@section('script')

<script>
    var temp_permission = [
        @foreach($user->getAllPermissions() as $userPermission)
            {!!"'".$permissions->name."',"!!}
        @endforeach
    ];
    $('#btn-add-permission').click(function() {
        $(this).hide();
        $('#add-permission').show();
    });

    $('#btncancel-add-permission').click(function() {
        $('#btn-add-permission').show();
        $('#add-permission').hide();
    });

    $('#btnok-add-permission').click(function() {
        if(!temp_permission.includes($('#permission-select').val())) {


            $.ajax({
                url: '/administrator/manage-user/add-permission-to/{{$user->id}}',
                type: 'post',
                data: {
                    _token: '{{csrf_token()}}',
                    permission_id: $('#permission-select').val().split('|')[0]
                },
                error: function(datas, status, c) {
                    $('#msg').addClass('alert-danger');
                    $('#msg').removeClass('alert-success');
                    $('#msg strong').text(datas.responseJSON.msg);
                    $('#msg').show();
                },
                success: function(datas, status,c) {
                    $('#msg').removeClass('alert-danger');
                    $('#msg').addClass('alert-success');
                    $('#msg strong').text(datas.msg);
                    $('#msg').show();
                    $('#btn-add-permission').show();
                    $('#add-permission').hide();
                    temp_permission.push($('#permission-select').val())
                    $('#new-permission').before(`
                        <tr>
                            <td> <i class="fa fa-circle-o" style="color:green;"></i> </td>
                            <td>${$('#permission-select').val().split('|')[1]}</td>
                            <td><button class="btn btn-xs btn-danger" title="remove permission"> <i class="fa fa-times"></i> </button></td>
                        </tr>
                    `)

                }
            })
        }
    });

</script>

@endsection
