<?php
require('conn.php');
$array = $_POST;
echo $message	= $array['message'];	
/* if(!empty($message)) {

	$sql = "INSERT INTO chat_messages (username, lastname, user_id)
	VALUES ('', '$message', '')";

	if (mysqli_query( $conn, $sql)) === TRUE) {
		echo "New record created successfully";
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
} */
?>