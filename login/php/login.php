<?php
$mysqli = new mysqli('localhost','root','','user');
if (mysqli_connect_errno()){
  die('Unable to connect!'). mysqli_connect_error();
}
$mysqli->set_charset("utf8");
$sql="INSERT INTO user (email,username,password,password)
    VALUES ('$_POST[email]','$_POST[user]','$_POST[password]','$_POST[confirm]')";
$mysqli->query($sql);
?>