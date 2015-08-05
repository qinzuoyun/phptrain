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
