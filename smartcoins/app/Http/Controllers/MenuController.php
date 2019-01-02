<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Menu;
use App\User;
use Auth;

class MenuController extends Controller
{
    public static function loadMenu()
    {
        // $menus = array();

        // foreach(Menu::where('level', 1)->get() as $menu) {
        //     if($menu->level == 1) {
        //         $menus[] = '<li>
        //             <a href="#"><i class="fa fa-gears"></i> <span>'.$menu->text.'</span></a>
        //         </li>';
        //     } else {
        //         $menus[] = '
        //             <li class="treeview">
        //                 <a href="#">
        //                 <i class="fa fa-key"></i> <span>'.$menu->text.'</span>
        //                 <span class="pull-right-container">
        //                     <i class="fa fa-angle-left pull-right"></i>
        //                 </span>
        //                 </a>
        //                 <ul class="treeview-menu">'.
        //                     foreach(Menu::where('parent', $menu->id)->get() as $submenu) {
        //                         echo '<li class=""><a href=""><i class="fa fa-circle-o"></i> Menu</a></li>'
        //                     }
        //                 .'</ul>
        //             </li>
        //         ';
        //     }
        // }

        // return $menus;

        return new Menu;

    }

}
