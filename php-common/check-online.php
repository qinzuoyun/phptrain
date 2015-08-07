<?php
session_start();
/**
 * Created by PhpStorm.
 * User: Lijin
 * Date: 2015/8/7
 * Time: 9:27
 */
if(isset($_SESSION['username'])){
    echo true;
}else{
    echo false;
}