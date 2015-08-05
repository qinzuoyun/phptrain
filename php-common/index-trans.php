<?php
session_start();
/**
 * Created by PhpStorm.
 * User: Lijin
 * Date: 2015/8/5
 * Time: 21:27
 * 确认当前是否有用户登录，有用户登录返回用户名，没有用户登录返回false
 */
require "sqlHelper.php";

if(isset($_SESSION['username'])){
    echo $_SESSION['username'];
}else{
    echo false;
}