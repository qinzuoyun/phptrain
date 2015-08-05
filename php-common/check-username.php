<?php
/**
 * Created by PhpStorm.
 * User: Lijin
 * Date: 2015/8/5
 * Time: 21:18
 */
require "sqlHelper.php";
$sql = "SELECT * FROM user WHERE username='$_GET[username]'";
$result = $mysql->query($sql);
/*
 * @return true:exist false: not exist
 */
if($result->fetch_array()){
    echo false;
}else{
    echo true;
}
