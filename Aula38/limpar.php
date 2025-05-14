<?php
session_start();//iniciar sessão
session_unset();//limpa totalmente todas as sessões
session_destroy();//eliminar as sessões ativas
header("LOCATION: index.php");
?>