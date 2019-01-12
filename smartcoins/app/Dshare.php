<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dshare extends Model
{
    public $fillable = [
        'user_id',
        'dshare'
    ];
}
