<?php
session_start();
require "conecta.php";
if(!$_SESSION['gerente']){
  header("location: index.html");
}
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="css/estilo.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Banco Ianes</title>
</head>

<body>
  <div class="container-fluid bg1">
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><b>BANCO $$$</b></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="banco.php">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="deposito.php">Depósito</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="saldo.php">Saldo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="saque.php">Saque</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="conta.php">Abrir Conta</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0" aciton="" method="post">
          <input class="form-control mr-sm-2" type="text" placeholder="Agência" aria-label="Search">
          <input class="form-control mr-sm-2" type="text" placeholder="Conta Corrente" aria-label="Search">
          <input class="form-control mr-sm-2" type="password" placeholder="Senha" aria-label="Search">

          <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">ENTRAR</button>
          <a href="logout.php">Sair</a>
        </form>
      </div>
    </nav>
  </div>
  <div class="container">
    <!--sessão um-->
    <section>
      <?php
      echo "<h5>Data:".$_SESSION['data']."</h5>";
      echo "<h5>Hora:".$_SESSION['hora']."</h5>";
      echo "<hr>";
      echo "<h5>Gerente SenaiClass:".$_SESSION['cargo']."</h5>";
      echo "<h5> Nome:".$_SESSION['nome']."</h5>";
      echo "<a href='logout.php'>Sair</a>";    
     ?>
      <h3>Abrir Nova Conta:</h3>   
      <div class="row">
        <div class="col-md">
        <form action="" method="POST">
          <div class="form-floating mb-3">
<input type="number" class="form-control" id="floatingInput" placeholder="Cód. Cliente:" name="cod" value="" readonly>
            <label for="floatingInput">Código Cliente</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="Nome do Cliente:" name="nome" value="" >
            <label for="floatingInput">Nome do Cliente</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="Agência do Cliente:" name="agencia" value="" >
            <label for="floatingInput">Agência do Cliente</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="C/C" name="conta" value="">
            <label for="floatingInput">Conta Corrente</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingInput" placeholder="Senha do Cliente:" name="senha" value=" >
            <label for="floatingInput">Senha do Cliente</label>
          </div>
          <div class="form-floating mb-3">
            <input type="number" class="form-control" id="floatingInput" placeholder="R$ SALDO:" name="saldo" value="" >
            <label for="floatingInput">R$ Saldo</label>
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-success" type="submit" name="abrir">ABRIR NOVA CONTA</button>
          </div>
          </form>
          <?php
          if(isset($_POST['abrir'])){
            $nome=$_POST['nome'];
            $ag=$_POST['agencia'];
            $conta=$_POST['conta'];
            $senha=$_POST['senha'];
            $saldo=$_POST['saldo'];
            $abrirConta="INSERT INTO clientes (nome, agencia, conta, senha, saldo) VALUES('$nome', '$ag','$conta','$senha','$saldo')";
            $dados=mysqli_query($con, $abrirConta);
            echo "<h5>Dados Cadastrados com Sucesso!!!</h5>";
            echo "<a href='clientes.php'>Voltar</a>";
          }
          ?>
        </div>
        <div class="col-md">

        </div>
      </div>
    </section>
    <!--sessão dois-->
    <section>

    </section>
    <!--sessão três-->
    <section>

    </section>
  </div>
  <div class="container-fluid bg-dark">
    <div class="row  bg2">

    </div>
    <div class="row rodape">
    <center>
        <p class=""><b>SUA EMPRESA</b> - Todos os Direitos Reservados | Copyright © 2024.</p>
    </center>
    
    </div>
    
  </div>
</body>

</html>