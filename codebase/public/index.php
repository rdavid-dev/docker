<?php
phpinfo();

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

// $con = mysqli_connect("db_server","homestead","secret","docker");

// // Check connection
// if (mysqli_connect_errno()) {
//   echo "Failed to connect to MySQL: " . mysqli_connect_error();
//   exit();
// } else {
//   echo "CONNECTED";
// }