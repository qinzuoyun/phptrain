<?php
/**
 * Created by PhpStorm.
 * User: Lijin
 * Date: 2015/8/22
 * Time: 13:16
 */
require "sqlHelper.php";
require "jsonHelper.php";
$sql = "SELECT user.username,user.avatar FROM user,user_project WHERE user_project.projectID='$_GET[projectID]' AND user.userID=user_project.userID";
$sqlResult = $mysql->query($sql);
$result = null;
foreach($sqlResult as $key=>$row){
    $row['avatar'] = 'http://'.$_SERVER['HTTP_HOST'].'/phptrain/img/avatar/'.$row['avatar'];
   $result[$key] = $row;

}
$json = JSON($result);
echo $json;