

<?php
    include 'configDB.php';
    $getnews=$_GET['news_number'];
   
    $conn = new mysqli("localhost","root","","newletter");
    $select="SELECT ID_articol,titlu,lead,imagine_lead FROM site_articole ORDER BY data Desc LIMIT $getnews ";
    $result=$conn ->query($select);
    $myArray = array();
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
        $myArray[] = $row;
    }
    echo json_encode($myArray);
    $conn->close();


?>