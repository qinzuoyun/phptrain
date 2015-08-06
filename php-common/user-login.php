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
    $_SESSION['userID'] = $row['userID'];
    $_SESSION['avatar'] = $row['avatar'];
    $_SESSION['email'] = $row['email'];
    $_SESSION['username'] = $row['username'];
    //echo $row['username'];
    echo true;
} else {
    echo false;
}