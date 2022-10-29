<?php
//Armado de Variables desde el Forms//


$nombre = $_POST ['nombre'];
$apellido = $_POST ['apellido'];
$mail = $_POST ['correo'];
$asunto = $_POST ['asunto'];
$dirección = $_POST ['dirección'];
$ciudad = $_POST ['ciudad'];
$mensaje = $_POST ['textarea'];
$destinatario = 'patriciomanganella@gmail.com';
$header = 'Este mail fue enviado desde la web DanMar';

$mensajeCompleto = $mensaje . "\nNombre: " . $nombre . "\nApellido: " . $apellido . "\nCorreo: " . $mail . "\nDirección: " . $dirección . "\nCiudad: " . $ciudad;

mail($destinatario, $asunto, $mensajeCompleto, $header, $nombre );

echo "<script> alert('correo enviado exitosamente')</script>";
echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";



?>
