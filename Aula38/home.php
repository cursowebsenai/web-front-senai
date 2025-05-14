<!-- Início da minha sessão -->
<?php
session_start();
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

</body>
<?php
$_SESSION['usuario'] = '';
$_SESSION['senha'] = '';
if (isset($_GET['nome']) and isset($_GET['senha'])) {
    $_SESSION['usuario'] = $_GET['nome'];
    $_SESSION['senha'] = md5($_GET['senha']);
    $_SESSION['start'] = true;
}

echo 'Nome:' . $_GET['nome'] . 'Senha:' . $_GET['senha'];
echo "
<br>
<a href='secreta.php'>IR PARA PÁGINA SECRETA</a>
"
    ?>

</html>