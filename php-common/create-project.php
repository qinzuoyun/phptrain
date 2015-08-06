<?php
session_start();
/**
 * Created by PhpStorm.
 * User: Lijin
 * Date: 2015/8/5
 * Time: 22:00
 */
require "sqlHelper.php";
$projectName = $_POST['projectName'];
$founderID = $_POST['userID'];
//$deadline = $_POST['deadline'];
$projectBanner = $_POST['projectBanner'];
$addProject = "INSERT INTO project(projectName, founderID, projectBanner) VALUES ('$projectName', '$founderID', '$projectBanner')";
$mysql->query($addProject);
//获取刚刚插入的项目的ID
$projectIDResult = $mysql->query("SELECT LAST_INSERT_ID()");
$projectID = $projectIDResult->fetch_array();
//插入到关系数据库
$linkUserAndProject = "INSERT INTO user_project(userID, projectID) VALUES ('$projectID[projectID]', $founderID)";
$mysql->query($linkUserAndProject);
echo true;