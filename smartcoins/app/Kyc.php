<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Kyc extends Model
{
     public $fillable = [
        'user_id',
        'first_name',
        'last_name',
        'email',
        'mobilenumber',
        'date_of_birth',
        'address_1',
        'address_2',
        'nationality',
        'city',
        'state',
        'document_type',
        'document_file',
        'zip_code',
        'wallet_type',
        'wallet_address',
        'status', // 1 = pending, 2 = progress, 3 = approve, 4 = reject
     ];
}
