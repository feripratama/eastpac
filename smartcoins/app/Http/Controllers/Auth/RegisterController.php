<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\UserWallet;
class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'username' => ['required','string','max:50','unique:users'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'mobilenumber' => ['required','string', 'max:50','unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        // dd(data_client('http://127.0.0.1:3333',$data['password']));
        //{\"KeyFileName\":\"UTC--2019-01-11T08-32-22.0Z--301c5b288539f332ad586b092d593f171475bf98\",\"KeyFileContent\":\"{\\\"address\\\":\\\"301c5b288539f332ad586b092d593f171475bf98\\\",\\\"id\\\":\\\"61a9c8f9-6d7c-4149-accc-ae7152b74cdc\\\",\\\"version\\\":3,\\\"Crypto\\\":{\\\"cipher\\\":\\\"aes-128-ctr\\\",\\\"cipherparams\\\":{\\\"iv\\\":\\\"ea3bdd1d41b3ddc4ceb9f1b7f3f9b659\\\"},\\\"ciphertext\\\":\\\"13e18bf28312172025ac1e27127e55e2152af31491e210296d9828648afc86f3\\\",\\\"kdf\\\":\\\"scrypt\\\",\\\"kdfparams\\\":{\\\"salt\\\":\\\"d9adc34b161b54068ab1a127373f71c63934ee66470b3b33b80e01ee8e61508f\\\",\\\"n\\\":131072,\\\"dklen\\\":32,\\\"p\\\":1,\\\"r\\\":8},\\\"mac\\\":\\\"90612d5b5274cebc07deb49eb3abd991546b7eecbb69c38b4b3befad0c58166d\\\"}}\",\"Address\":\"301c5b288539f332ad586b092d593f171475bf98\",\"PrivateKey\":\"0x2e2ea94139c0b515f0805a86f7d20f8360266fd23ede7d35e1c6afc748a4a77f\",\"Mnemonic\":\"visa steel practice absurd start object traffic say destroy okay music whale\",\"Path\":\"visa steel practice absurd start object traffic say destroy okay music whale\",\"WalletAddress\":\"0x301c5b288539F332Ad586b092D593f171475bf98\"}
        $newDataUser = json_decode(data_client('http://127.0.0.1:3333',$data['password']));
        // dd($newDataUser);
        $newUser = User::create([
            'username' => $data['username'],
            'name' => $data['name'],
            'email' => $data['email'],
            'mobilenumber' => $data['mobilenumber'],
            'password' => Hash::make($data['password']),
        ]);

        UserWallet::create([
            'user_id' => $newUser->id,
            'address' => $newDataUser->Address,
            'key_file_content' => $newDataUser->KeyFileContent,
            'key_file_name' => $newDataUser->KeyFileName,
            'mnemonic' => $newDataUser->Mnemonic,
            'path' => $newDataUser->Path,
            'private_key' => $newDataUser->PrivateKey,
            'wallet_address' => $newDataUser->WalletAddress
        ]);

        // create wallet

        // assign member role to newly registered member
        $newUser->assignRole('member');
        return $newUser;
    }
}
