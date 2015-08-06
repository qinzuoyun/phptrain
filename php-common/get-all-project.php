<?php
session_start();
/**
 * Created by PhpStorm.
 * User: Lijin
 * Date: 2015/8/5
 * Time: 21:45
 * 如果用户没有关联任何项目，返回false
 */
require "sqlHelper.php";
$username = $_SESSION['username'];
$sql = "SELECT projectID,projectName,projectBanner FROM user_project,project WHERE user_project.userID='$username' AND user_project.projectID=project.projectID";
$result = $mysql->query($sql);

if($result->fetch_array()){
    $json = json_encode($result->fetch_array());
    echo $json;
}else{
    echo false;
}

