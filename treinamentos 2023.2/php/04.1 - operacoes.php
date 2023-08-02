<?php

$numero1 = 2;
$numero2 = 3;

echo $numero1 + $numero2;

echo "<br>";

echo $numero1 - $numero2;

echo "<br>";

echo $numero1 * $numero2;

echo "<br>";

echo $numero1 / $numero2;

echo "<br>";

echo $numero1 ** $numero2;

echo "<br>";

$nome1 = "Breno";
$nome2 = "onerB";

echo $nome1 . $nome2; // operação de concatenar strings
echo "<br>";

echo "Olá {$nome1}, você tem {$numero2} anos!"; // aspas duplas
echo "<br>";

echo 'Olá {$nome1}, você tem {$numero2} anos!'; //aspas simples
echo "<br>";

// variáveis com strings aceitam indexador
echo "Olá {$nome1[0]}, você tem {$numero2} anos!";
echo "<br>";

// booleano
echo ($numero1 == $numero2);
echo "<br>";

// incremento
//++ ou += 1

// decremento
// -- ou -= 1

?>