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

//execute the SQL query and return records
$result = mysql_query("SELECT * FROM users");

$data_json = array();
//fetch tha data from the database 
while ($row = mysql_fetch_array($result)) {
	$tmp['id'] = $row{'id'};
	$tmp['name'] = $row{'name'};
	$tmp['mobile'] = $row{'mobile'};
	$tmp['email'] = $row{'email'};
	$tmp['password'] = $row{'password'};
	$tmp['created'] = $row{'created'};

	array_push($data_json, $tmp);
   	//echo "ID:".$row{'id'}." Name:".$row{'name'}."<br>";
}
//close the connection
mysql_close($dbhandle);
echo json_encode($data_json);
?>