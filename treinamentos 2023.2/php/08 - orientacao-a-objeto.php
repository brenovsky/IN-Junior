<?php

class Produto {
    public $descricao;
    private $preco;
    public $desconto;

    function __construct($descricao, $preco, $desconto) {
        $this->descricao = $descricao;
        $this->preco = $preco;
        $this->desconto = $desconto;
    }

    function preco_final() {
        return "R$" . ($this->preco * (1 - $this->desconto));
    }

    function obterPreco() {
        return $this->preco;
    }
}

$produto1 = new Produto("Camisa preta", "105.99", "0.1");

print_r($produto1);

echo "<br>";

echo ($produto1->obterPreco());

echo "<br>";

echo ($produto1->preco_final());



?>