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
$result = $mysql->query($sql)->fetch_array();
if(!empty($result)){
    //exist
    $exist = "SELECT * FROM user_project WHERE userID='$result[userID]' AND projectID='$_GET[projectId]'";
    if(empty($mysql->query($exist)->fetch_array())){
        //if link not exist then add it
        $add = "REPLACE INTO user_project(userID, projectID) VALUES ('$result[userID]', '$_GET[projectId]')";
        $mysql->query($add);
        echo "add-user-to-project-success";
    }
    echo "user already in project";

}else{
    echo "user-not-exist-error";
}
