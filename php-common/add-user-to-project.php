<?php
/**
 * Created by PhpStorm.
 * User: Lijin
 * Date: 2015/8/21
 * Time: 20:17
 */
require "sqlHelper.php";
$email = $_GET['email'];
$sql = "SELECT * FROM user WHERE email='$email'";
$result = $mysql->query($sql);
if(!empty($result)){
    //exist
    $row = $result->fetch_array();
    $add = "INSERT INTO user_project(userID, projectID) VALUES ('$row[userID]', '$_GET[projectId]')";
    $mysql->query($add);
    echo "add user to project success";
}else{
    echo "user-not-exist-error";
}
