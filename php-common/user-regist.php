<?php
/**
 * Created by PhpStorm.
 * User: Lijin
 * Date: 2015/8/5
 * Time: 21:34
 */
require "sqlHelper.php";
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];
$check = "SELECT * FROM user WHERE username='$username'";
$usernameExist = $mysql->query($check)->fetch_array();
if($usernameExist) {
    echo 'user-exist';
}else{
    $sql = "INSERT INTO user(username, password, email, avatar) VALUES ('$username', '$password', '$email', 'default.png')";
    $mysql->query($sql);
}