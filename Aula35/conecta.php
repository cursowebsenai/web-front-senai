<?php
$banco="nome";
$usuario="root";
$pass="senai123";
$server="localhost";

$con=mysqli_connect($server,$usuario,$pass,$banco);
if($con){
    echo "conexão realizada com sucesso"; //teste para verificar a conexão
}
else{
    echo "Não conectado!!!"; 
}

?>