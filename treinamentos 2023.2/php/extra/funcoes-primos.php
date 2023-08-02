<?php

function primo($x) {
    if ($x == 1) {
        return false;
    }
    
    elseif ($x == 2) {
        return true;
    }

    for ($i=2; $i < $x ** (1 / 2); $i++) { 
        if ($x % $i == 0) {
            return false;
        }
    }

    return true;
}

echo primo(13);

?>