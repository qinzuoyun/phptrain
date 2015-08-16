<?php
session_start();
/**
 * Created by PhpStorm.
 * User: Lijin
 * Date: 2015/8/8
 * Time: 9:59
 */
if(isset($_SESSION['avatar'])){
    echo $_SESSION['avatar'];
}