

<?php
    include 'configDB.php';

    $getnews=$_GET['news_number'];
    $id_to_compare=$_GET['compare_num'];
    $values =  $_POST["news"];  
    
    $buildString="";
    for($i=0;$i<count($values);$i++){

        $buildString=$buildString." ID_sec=".$values[$i];
        if($i!=count($values)-1){
            $buildString=$buildString." OR";
        }
       

    }
       // $buildString=$buildString." 1=1";
        

    
   
    $conn = new mysqli("localhost","root","","newletter");
    
    $select="SELECT ID_articol,titlu,lead,imagine_lead FROM site_articole WHERE $buildString ORDER BY data Desc LIMIT $getnews ";
   // echo $select;
    $result=$conn ->query($select);
    $myArray = array();
    
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
        $myArray[] = $row;
    }
    echo json_encode($myArray);
    $conn->close();


?>