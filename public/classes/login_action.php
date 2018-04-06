<?php
require('conn.php');

$array = $_POST;
$userName	= $array['form-username'];
$userPass = $array['form-password'];	
if(!empty($userName) && !empty($userPass)) {

    $query = "SELECT username FROM users WHERE username = '$userName' AND password = '$userPass'";// AND password = $userPass";

	$result = mysqli_query( $conn, $query);
	$row = mysqli_fetch_array($result);

	if($row){
	    setcookie('login_user', $row['username'], time() + (86400 * 30), "/");
		echo $row['username'];
	}
}
?>