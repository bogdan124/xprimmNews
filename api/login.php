<?php
    include 'configDB.php';


    class verifyLogin{

        function __construct($username,$password) {
            $this->$username=$username;
            $this->$password=$password;
            $this->checkLogin($this->$username,$this->$password);
        }


        function checkLogin($username,$password){

            $conn = new mysqli("localhost","root","","newletter");
            $select="SELECT * FROM users WHERE username='$username' AND password='$password'";
            $query=$conn ->query($select);
            if($query->num_rows==1){
                $this->buildCookies($this->$username,$this->$password);
                header("Location:index.php");
            }
            $conn->close();

        }


        function buildCookies($username,$password){
            $data=array(
                "username"=>$username,
                "password"=>$password
            );
            setcookie("user", $data, time() + (20*86400 * 30), "/");
        }
    }

    $username=$_GET['username'];
    $password=$_GET['password'];
    
    $login=new verifyLogin($username,$password);



?>