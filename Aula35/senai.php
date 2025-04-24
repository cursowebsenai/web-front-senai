<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Login - SENAI</title>
  <link rel="stylesheets" href="css/estilo.css"> 
</head>
<body>
  <?php
  include "dados.php";
  echo "Data: ".$data. " Hora Local: ".$hora;
  echo "<hr>";
  ?>
    <!-- Aviso de Cookies -->
  <div class="cookie-banner" id="cookieBanner">
    Este site utiliza cookies para melhorar a experiência do usuário.
    <button onclick="aceitarCookies()">Aceitar</button>
  </div>
  <script>
    // Verifica se o cookie foi aceito anteriormente
    window.onload = function () {
      if (localStorage.getItem("cookiesAceitos") === "true") {
        document.getElementById("cookieBanner").classList.add("hidden");
      }
    };

    function aceitarCookies() {
      localStorage.setItem("cookiesAceitos", "true");
      document.getElementById("cookieBanner").classList.add("hidden");
    }
  </script>
</body>
</html>