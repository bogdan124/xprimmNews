

<?php

    include 'configDB.php';
    $word=$_GET['search'];
   
    $conn = new mysqli("localhost","root","","newletter");
    
    $select="SELECT ID_articol,titlu,lead,imagine_lead FROM site_articole WHERE titlu LIKE '%$word%' ORDER BY data Desc LIMIT 25 ";
    $result=$conn ->query($select);
    $myArray = array();
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
        $myArray[] = $row;
    }
    echo json_encode($myArray);
    $conn->close();


?>