<?php
if(isset($_POST))
{
$insert = false;
// if(isset($first)){
    // Set connection variables
    $server = "localhost";
    $username = "root";
    $password = "";
    $db="myDB2";
echo"1";
    // Create a database connection
    $conn = mysqli_connect($server, $username, $password,$db);

    // Check for connection success
    if(!$conn){
        die("connection to this database failed due to" . mysqli_connect_error());
    }
    // echo "<br>Success connecting to the db 1<br>";

    // Collect post variables
    $first = $_POST['first']; 
    $last =  $_POST['last'];
    $username =  $_POST['username'];
    $email =  $_POST['email'];
    $country =  $_POST['country'];
    $zip =  $_POST['zip'];
    // $sql = "CREATE DATABASE myDB2";
    $sql = "INSERT INTO project (`first`, `last`, `username`, `email`, `country`, `zip`)
      VALUES ('$first', '$last', '$username', '$email', '$country', '$zip')";
    // echo $sql."<br>";
    // echo "Success connecting to the db 2<br>";
    // echo"2";

    // Execute the query
     if($conn->query($sql)){ 
        // echo "Successfully inserted";

        // Flag for successful insertion
        $insert = true;
        echo"Sucess";

    }
    else{
        echo"Fail".$conn->error;
        // echo "ERROR: $sql <br> $con->error";
    }
    // echo "Success connecting to the db 3";
    echo"3";

    // Close the database connection
    $conn->close();
// }
}
?>
