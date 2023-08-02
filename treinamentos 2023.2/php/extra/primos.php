<pre>
    <?php
    
    $n = 13;
    $primo = true;
    
    for ($i = 2; $i <= $n ** (1 / 2) + 1 ; $i++) {
        if ($n == 1) {
            $primo = false;
            break;
        }
    
        elseif ($n == 2) {
            break;
        }
    
        elseif ($n % $i == 0) {
            $primo = false;
            break;
        }
    }
    
    if ($primo == true) {
        echo "{$n} é primo";
    }
    
    else {
        echo "{$n} não é primo";
    }
    
    ?>
</pre>