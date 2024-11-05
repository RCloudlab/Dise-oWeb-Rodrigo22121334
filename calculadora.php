<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $num1 = intval(htmlspecialchars($_POST["num1"]));
        $num2 = intval(htmlspecialchars($_POST["num2"]));
        $operacion = htmlspecialchars(($_POST["operacion"]));

        if ($operacion == "+") {
            $resualtado = $num1 + $num2;  
            echo"<h1>El resultado de la suma es $resualtado</h1>";
        }elseif($operacion == "-"){
            $resualtado = $num1 - $num2;  
            echo"<h1>El resultado de la resta es $resualtado</h1>";
        }elseif($operacion == "*"){
            $resualtado = $num1 * $num2;  
            echo"<h1>El resultado de la multiplicacion es $resualtado</h1>";
        }elseif($operacion == "/"){
            if($num2 == 0){
                echo"<h1>No puedes dividir entre cero</h1>";
            }else{
                $resualtado = $num1 / $num2;  
                echo"<h1>El resultado de la division es $resualtado</h1>";
            }
        }elseif($operacion == "^"){
            $resualtado = pow($num1, $num2);  
            echo"<h1>El resultado de la potencia es $resualtado</h1>";
        }elseif($operacion == "!"){
            if($num1 < 0 || $num2 < 0 ){
                echo"<h1>Revisa que tus numeros sean positivios, no podemos sacar raices de numero negativos</h1>";
            }else{
                $resualtado = sqrt($num1);
                $resualtado2 = sqrt($num2);
                echo"<h1>El resultado de la la raiz del primer numero es $resualtado</h1>";
                echo"<h1>El resultado de la la raiz del segundo es $resualtado2</h1>";
            }
        }

    }else{
        print("no se encontro nada");
        echo"<h1>No se encontró nada</h1>";
    }

?>