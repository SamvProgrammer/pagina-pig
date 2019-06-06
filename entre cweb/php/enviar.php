<?php

$destino="jocalburieu@gmail.com";

// variables del form contacto
$nombre= $_POST['nombre'];
$email=$_POST['email'];
$tel=$_POST['tel'];
$contenido="Nombre:" . $nombre . "n\Email:" . $email . "\nTeléfono:" . $telefono . "\nMensaje:" . $mensaje;
mail($destino,"MAIL DE CONTACTO" , $contenido);
header("Location:enviado.html");


 ?>
