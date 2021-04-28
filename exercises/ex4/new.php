<?php

if ($_SERVER["REQUEST_METHOD"] == "GET") {
     $serial = $_GET["serialNo"];
     $capacity = $_GET["capacity"];
    $count = strlen($serial) * $capacity;
     if($capacity >= 666){
         echo "your number is $count";
     }
    echo "New Item $serial - $capacity is Added";
}

?>