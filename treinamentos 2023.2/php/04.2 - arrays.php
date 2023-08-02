<pre>
    <?php
    
        $produtos = array('camiseta', 'bermuda', 'calça');
        
        print_r($produtos);
        echo "<br>";
        
        echo("O último elemento desse array é: {$produtos[2]}");
        echo "<br>";
        
        echo count($produtos); // conta quantos elementos tem na array
        echo "<br>";
        
        $produtos1 = array('tênis', 'óculos', ['saia', 'meia']);
        
        var_dump($produtos1); // mostra mais detalhadamente
        echo "<br>";

        print_r($produtos1);
        
        $produto = [ // array associativa
            'descrição' => 'Camiseta preta',
            'preço' => 51,
            'img' => [
                'src' => 'img/imagem.png',
                'alt' => 'Camiseta preta',
                ]
            ];
        
        print_r($produto);
        echo "<br>";

        echo ($produto['descrição']);
        echo "<br>";

        unset($produtos[2]); // é um del[i]
        
        print_r($produtos);
        echo "<br>";

        $produtos[] = 'sandália'; // é um .append do python (mas, se os colchetes estiverem vazios, vai adicionar automaticamente no index)

        print_r($produtos);
    ?>
</pre>