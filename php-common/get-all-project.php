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
if(isset($_SESSION['username'])){
    $username = $_SESSION['username'];
    $sql = "SELECT projectID,projectName,projectBanner FROM user_project,project WHERE user_project.userID='$username' AND user_project.projectID=project.projectID";
    $result = $mysql->query($sql);
    if(!empty($result)){
        $json = json_encode($result->fetch_array());
        echo $json;
    }else{
        echo "no-project";
    }
}else{
    echo 'session-out-of-time';
}

