<?php
    session_start();
    if (isset($_SESSION["error_nombre"])) {
        $error_nombre = $_SESSION["error_nombre"];
        echo"<h2>$error_nombre</h2>";
        unset($_SESSION["error_nombre"]);
    } elseif (isset($_SESSION["error_email"])) {
        $error_email = $_SESSION["error_email"];
        echo"<h2>$error_email</h2>";
        unset($_SESSION["error_email"]);
    }elseif (isset($_SESSION["error_contrasena"])) {
        $error_contrasena = $_SESSION["error_contrasena"];
        echo"<h2>$error_contrasena</h2>";
        unset($_SESSION["error_contrasena"]);
    }elseif (isset($_SESSION["error_confirmacion"])) {
        $error_confirmacion = $_SESSION["error_confirmacion"];
        echo"<h2>$error_confirmacion</h2>";
        unset($_SESSION["error_confirmacion"]);
    }
    if (isset($_SESSION["er_val"])) {
        $er_val = $_SESSION["er_val"];
        echo"<h2>$er_val</h2>";
        unset($_SESSION["er_val"]);
    }

    if (isset($_SESSION["error_password"])) {
        $error_password = $_SESSION["error_password"];
        echo"<h2>$error_password</h2>";
        unset($_SESSION["error_password"]);
    }
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Básica</title>
</head>
<body>
    <form action="calculadora.php" method="post">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" ><br>
        
        <label for="email">Email</label>
        <input type="text" id="email" name="email" ><br>
        
        <label for="contrasena">Contraseña</label>
        <input type="text" id="contrasena" name="contrasena" ><br>
        
        <label for="connf">Confirmar Contraseña</label>
        <input type="text" id="conf_contrasena" name="conf_contrasena" ><br>
 
        <button type="submit">Calcular</button>
    </form>
</body>
</html>