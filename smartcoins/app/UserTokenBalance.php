<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserTokenBalance extends Model
{
    public $fillable = [
        'user_id',
        'east_balance'
    ];
}
