<?php
header('Access-Control-Allow-Origin: *');
$username = "bankdev_bankdev";
$password = "bankdev";
$hostname = "localhost";

//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password) 
 or die("Unable to connect to MySQL");
//echo "Connected to MySQL<br>";

//select a database to work with
$selected = mysql_select_db("bankdev_angular",$dbhandle) 
  or die("Could not select examples");

$json_data = file_get_contents("php://input");
$php_data = json_decode($json_data);


if($php_data->name && $php_data->mobile && $php_data->email && $php_data->password){

  	$sql = "INSERT INTO users ". "(name, mobile, email, password, created) ". 
  				"VALUES('$php_data->name','$php_data->mobile','$php_data->email', '$php_data->password', NOW())";
      
    $retval = mysql_query( $sql, $dbhandle );
   
   if( $retval ) {
      	$data_return = array(
			array(
					"status_code" => 200,
					"massage" => "OK",
				)		
		);
   }else{
   		$data_return = array(
			array(
					"status_code" => 400,
					"massage" => "error add users",
				)		
		);
   }

	
}else{
	$data_return = array(
		array(
				"status_code" => 400,
				"massage" => "error",
			)		
	);
}


//close the connection
mysql_close($dbhandle);
echo json_encode($data_return);
?>