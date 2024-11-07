<?php
    session_start();
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre = htmlspecialchars($_POST["nombre"]);
        $email = htmlspecialchars($_POST["email"]);
        $contrasena = htmlspecialchars($_POST["contrasena"]);
        $confirmacion = htmlspecialchars($_POST["conf_contrasena"]);

        if (empty($nombre)) {
            $_SESSION['error_nombre'] = "El campo nombre le falta datos";
            header("Location:index.php");
            exit();
        } elseif (empty($email)) {
            $_SESSION['error_email'] = "El campo email le falta datos";
            header("Location:index.php");
            exit();
        } elseif (empty($contrasena)) {
            $_SESSION['error_contrasena'] = "El campo contrasena le falta datos";
            header("Location:index.php");
            exit();
        } elseif (empty($confirmacion)) {
            $_SESSION['error_confirmacion'] = "El campo de confirmacion de contraseña le falta datos";
            header("Location:index.php");
            exit();
        }
        if($contrasena != $confirmacion){
            $_SESSION['error_password'] = "Las contraseñas no son identicas revisalas";
            header("Location:index.php");
        }

        $resultado_validacion = validar_contraseña($contrasena);
        if ($resultado_validacion != "La contraseña es válida.") {
            $_SESSION['er_val'] = $resultado_validacion; 
            header("Location:index.php");
            exit();
        }
        echo"Resgistro con exito <br> $nombre <br> $email <br> $contrasena";
    }else{
        print("no se encontro nada");
        echo"<h1>No se encontró nada</h1>";
    }

    function validar_contraseña($contraseña) {
        $errores = [];
        if (strlen($contraseña) < 8) {
            $errores[] = "La contraseña debe tener al menos 8 caracteres.";
        }
        if (!preg_match('/[A-Z]/', $contraseña)) {
            $errores[] = "La contraseña debe contener al menos una letra mayúscula.";
        }
        if (!preg_match('/\d/', $contraseña)) {
            $errores[] = "La contraseña debe contener al menos un número.";
        }
        if (!preg_match('/^[A-Za-z\d]+$/', $contraseña)) {
            $errores[] = "La contraseña solo puede contener letras y números.";
        }

        if (empty($errores)) {
            return "La contraseña es válida.";
        } else {
            return implode("<br> ", $errores);
        }
    }
    

?>