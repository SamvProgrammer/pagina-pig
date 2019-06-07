<?php

header("Content-Type: text/html; charset=UTF-8");
$destino="jocalburieu@gmail.com";

// variables del form contacto
$nombre= $_POST['nombre'];
$email=$_POST['email'];
$telefono=$_POST['telefono'];
$mensaje=$_POST['mensaje'];
$contenido="Nombre:".$nombre."\nEmail:".$email."\nTeléfono:".$telefono."\nMensaje:".$mensaje;
mail($destino,"MAIL DE CONTACTO" , $contenido);
header("Location:enviado.html");
 ?>
