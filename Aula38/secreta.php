<?php
// include "home.php";
session_start();

if (!$_SESSION["start"]) {
    header("Location:index.php");
} else {
    echo $_SESSION["usuario"];
    echo "<br>";
    echo $_SESSION['senha'];
}

echo "<br> <a href='index.php'>Voltar</a>"
    ?>