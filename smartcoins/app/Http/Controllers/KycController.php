<?php

namespace App\Http\Controllers;

// library
use Illuminate\Http\Request;
use Validator;
use Auth;

// model
use App\Kyc;
use App\User;

class KycController extends Controller
{
    private $view_dir = 'layouts.sections.kyc.';

    public function __construct()
    {

    }

    public function index()
    {
        // dd(Auth::user()->hasVerifiedEmail());
        $title = 'Verify your identity to participate in tokensale.';
        return view($this->view_dir. 'index', compact('title'));
    }

    public function store(Request $request)
    {
        $file = $request->file('document_file');

        $validator = Validator::make($request->all(), [
            // 'first_name'    => 'required',
            // 'last_name'     => 'required',
            // 'email'         => 'required',
            // 'mobilenumber'  => 'required',
            // 'date_of_birth' => 'required|date',
            // 'address_1'     => 'required',
            // 'address_2'     => 'required',
            // 'nationality'   => 'required',
            // 'city'          => 'required',
            // 'state'         => 'required',
            // 'document_type' => 'required',
            'document_file' => 'required|image',
            // 'zip_code'      => 'required',
            // 'wallet_type'   => 'required',
            // 'wallet_address' => 'required',
        ]);

        if($validator->fails()) {
            dd(redirect()->back()->withErrors($validator));
            // return redirect()->back()->withErrors();
        } else {
            dd($file->extension());
            Kyc::create([
                'user_id'       => Auth::user()->id,
                'first_name'    => $request->first_name,
                'last_name'     => $request->last_name,
                'email'         => $request->email,
                'mobilenumber'  => $request->mobilenumber,
                'date_of_birth' => $request->date_of_birth,
                'address_1'     => $request->address_1,
                'address_2'     => $request->address_2t_name,
                'nationality'   => $request->nationality,
                'city'          => $request->city,
                'state'         => $request->state,
                'document_type' => $request->document_type,
                'document_file' => $request->document_file,
                'zip_code'      => $request->zip_code,
                'wallet_type'   => $request->wallet_type,
                'wallet_address' => $request->wallet_address,
            ]);

            return redirect()->back()->with('msg', 'You have completed the process of KYC.');
        }


    }

}
