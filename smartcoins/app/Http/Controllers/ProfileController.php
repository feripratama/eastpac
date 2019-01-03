<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Auth;
use Validator;
use Illuminate\Support\Facades\Input;



class ProfileController extends Controller
{


    public function __construct()
    {
        // $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
     public function upload(Request $request)
        { 
            // dd($request->file('file')->getClientOriginalName());
            $user = Auth::user()->id;
            // dd($user);
            
            $validator = Validator::make($request->all(), [
                'file' => 'required'
            ]);

            if($validator->fails()) {
                $result = ['msg' => 'Update Images Failed', 'type' => 'danger'];
                $status = 500;
            } else {
                $result = ['msg' => 'Udpate Images Success2', 'type' => 'success'];
                $status = 200;

                    // dd(User::find($user));
                User::where('id', $user)->update(['images' => $request->file('file')->getClientOriginalName()]);
            }

                 return response()->json($result, $status);
    

    }

    public function index()
    {
        $title = "Profile";
        return view('profile.index', compact('title'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(array $data)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $username = Auth::user()->username;

        $validator = Validator::make($request->all(), [
            'fullname' => 'required|regex:/^[\pL\s\-]+$/u'
        ]);

        if($validator->fails()) {
            $result = ['msg' => 'Update Fullname Failed', 'type' => 'danger'];
            $status = 500;
        } else {
            $result = ['msg' => 'Udpate Fullname Success', 'type' => 'success'];
            $status = 200;

            User::where('username', $username)->update([
                'name' => $request->fullname
            ]);
        }

        return response()->json($result, $status);
    }

    public function updatePassword(Request $request)
    {
        $username = Auth::user()->username;

        $validator = Validator::make($request->all(), [
            'password_old' => 'required',
            'password' => 'required|confirmed'
        ]);

        $check_old_password = Hash::check($request->password_old, Auth::user()->password);
        // dd($validator->errors());
        if($validator->fails()) {
            $result = ['msg' => $validator->errors()->first(), 'type' => 'danger'];
            $status = 500;
        } else {
            if($check_old_password) {
                $result = ['msg' => 'Udpate Password Success', 'type' => 'success'];
                $status = 200;

                User::where('username', $username)->update([
                    'password' => bcrypt($request->password)
                ]);
            } else {
                $result = ['msg' => 'Wrong old password', 'type' => 'danger'];
                $status = 500;
            }
        }

        return response()->json($result, $status);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
