<?php
function connectDB($servername,$username,$password,$DBselect){

    // Create connection
    $conn = new mysqli("localhost","root","","newletter");

    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }else{
     // echo "Connected successfully";
      //mysqli_select_db($conn, $DBselect);or die("coudn't select DB");
    }
    return $conn;
}
//$conn=connectDB("localhost","root","","newletter");
?>