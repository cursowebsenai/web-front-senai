<?php
date_default_timezone_set('America/Sao_Paulo');
$data=date('d/m/Y');
$hora=date('H:i');
$user="";
$pass="";
if(isset($_GET['usuario']) && isset($_GET['senha'])){
    $user=$_GET['usuario'];
    $pass=$_GET['senha'];
    if($user == "senai" && $pass=="senai123"){
        header('location: senai.php');
    }
    else{
        echo "Entrada não autorizada";
    }    
}
