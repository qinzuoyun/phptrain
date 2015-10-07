<?php
session_start();
/**
 * Created by PhpStorm.
 * User: Lijinyao
 * Date: 2015/10/6
 * Time: 19:46
 */
require "sqlHelper.php";
$projectName = $_POST['projectName'];
$founderID = $_SESSION['userID'];
$sql = "INSERT INTO project(projectName, founderID) VALUES ('$projectName', '$founderID')";
$mysql->query($sql);
$newProjectID = $mysql->query("SELECT projectID FROM project WHERE projectName='$projectName'&&founderID='$founderID'")->fetch_array()['projectID'];

//link project and user
$sql = "INSERT INTO user_project(userID, projectID) VALUES ('$_SESSION[userID]','$newProjectID')";
$mysql->query($sql);