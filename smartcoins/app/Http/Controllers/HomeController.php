<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\SiteConfig;
use App\User;
use App\UserTokenBalance;
use Auth;
use Validator;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(User $userModel)
    {

        //Role::create(['name'=>'Administrator']);
        //Role::create(['name'=>'Member']);
        //Permission::create(['name'=>'Edit Personal Profiles']);
        //Permission::create(['name'=>'Manage  My  Wallet']);
        //Permission::create(['name'=>'Manage  User']);
        //Permission::create(['name'=>'Manage My Profile']);

        // $role1 = Role::findById(1);
        // $role2 = Role::findById(2);

        // $permission1 = Permission::findById(1);
        // $permission2 = Permission::findById(2);
        // $permission3 = Permission::findById(3);

        // $role1->givePermissionTo($permission1);
        // $role1->givePermissionTo($permission2);
        // $role1->givePermissionTo($permission3);

        // $role2->givePermissionTo($permission1);
        // $role2->givePermissionTo($permission2);
        //auth()->user()->givePermissionTo('Manage My Profile');
        //auth()->user()->assignRole('Administrator');
        $title = "Dashboard";
        $get_eth_price = json_decode(getEthPrice('https://sandbox-api.coinmarketcap.com'));
        // $get_eth_price = "108";

        return view('layouts.sections.home', compact('title', 'get_eth_price'));
    }

    public function contribution()
    {

        $title = "Dashboard";
        $get_eth_price = json_decode(getEthPrice('https://sandbox-api.coinmarketcap.com'));
        // $get_eth_price = '108';
        // dd($get_eth_price);
        return view('layouts.sections.contribution', compact('title', 'get_eth_price'));
    }

    public function contributionAction(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'eth' => 'required',
            'est' => 'required'
        ]);

        if($validator->fails()) {
            $response = [
                'msg' => 'Transaction failed',
                'title' => 'Failed',
                'icon' => 'error',
                'type' => 'error'
            ];
        } else {

            $get_eth_price = json_decode(getEthPrice('https://sandbox-api.coinmarketcap.com'));

            $eth_val = $request->est / $get_eth_price->data->quote->USD->price;
            // dd(number_format((float)$eth_val, 4, '.', ''));
            sent_transaction("http://192.168.100.207:3333", number_format((float)$eth_val, 4, '.', ''), $request->est);

            UserTokenBalance::updateOrCreate(
                ['user_id' => Auth::user()->id],
                ['east_balance' => $request->est]
            );
            $response = [
                'msg' => 'Transaction success , recive '.$request->est.' token',
                'title' => 'Success',
                'icon' => 'success',
                'type' => 'success'
            ];
        }

        return response()->json($response, 200);
    }

    public function transaction()
    {

        $title = "Transaction";
        return view('layouts.sections.transaction', compact('title'));
    }

    public function referral()
    {
        $title = "Referral";
        $sosmed = [
            '1' => 'facebook',
            '2' => 'twitter'
        ];

        // dd(array_key_exists(3,$sosmed));
        return view('layouts.sections.referral', compact('title', 'sosmed'));
    }

    public function kycapp()
    {
        $title = "KYC App";
        return view('layouts.sections.kycapp', compact('title'));
    }

    public function dshareIndex()
    {

        return view('layouts.sections.dshare');
    }
}
