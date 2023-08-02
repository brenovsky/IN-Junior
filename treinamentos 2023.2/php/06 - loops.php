<pre>
    <?php
        $produtos = [
            [
                'descrição' => 'camisa preta',
                'preço' => '51'
            ],
            [
                'descrição' => 'camisa branca',
                'preço' => '58'
            ],
            [
                'descrição' => 'calça jeans',
                'preço' => '101'
            ]
        ];

        for ($i=0; $i < count($produtos); $i++) { 
            print_r($produtos[$i]);
        }

        foreach ($produtos as $produto) { // for each
            print_r($produtos);
        }
        echo "<br>";

        $contador = 0;
        while ($contador < count($produtos)) {
            print_r($produtos[$contador]);

            $contador++;
        }
        
        echo "<br>";

        // foreach aninhado
        foreach ($produtos as $key => $product) {
            echo $key . "<br>";
            foreach ($product as $key => $value) {
                echo $key . " -> ";
                echo $value . "<br>";
            }

        }
    ?>
</pre>