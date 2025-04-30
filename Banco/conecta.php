<?php
session_start();

$server = "localhost";
$user = "root";
$pass = "";
$bank = "db_banco";

$con = mysqli_connect($server, $user, $pass, $bank);
date_default_timezone_set('America/Sao_Paulo');
$_SESSION['data'] = date('d-m-y');
$_SESSION['hora'] = date('H:i:s');

// if ($con) {
//     echo "entrada autorizada";
// } else {
//     echo "entrada não autorizada";
// }
