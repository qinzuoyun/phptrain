<?php
session_start();
/**
 * Created by PhpStorm.
 * User: Lijin
 * Date: 2015/8/5
 * Time: 20:24
 */
require "sqlHelper.php";

$username = $_POST["username"];
$password = $_POST["password"];
$sql = "SELECT * FROM user WHERE username='$username' AND password='$password'";
$result = $mysql->query($sql);
if($row = $result->fetch_array()){
    foreach ($row as $key=>$value){
        $_SESSION[$key] = $value;
        $json[$key] = $value;
    }
    //set avatar url
    $_SESSION['avatar'] = 'http://'.$_SERVER['HTTP_HOST'].'/phptrain/img/avatar/'.$json['avatar'];
    echo true;
} else {
    echo false;
}