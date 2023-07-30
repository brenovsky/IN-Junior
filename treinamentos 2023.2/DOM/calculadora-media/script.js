var soma = 0
var contador = 0
var verifica = false

let secao = document.querySelector("#nota");
let res = document.querySelector("#resultado");

// adicionar o número
function addNumber() {
    let input = document.querySelector("#input_number");
    let number = input.value;
    
    // conferir input
    if (number != "") {
        if (number >= 0 && number <= 10) {
            number = parseFloat(number);
            soma += number;
            contador ++;
            console.log(number);

            let escopo = document.createElement("div");
            let notas = document.createElement("p");

            notas.innerText = "A nota " + contador + " foi " + number;

            escopo.append(notas);
            secao.append(escopo);
        }
        else {
            alert("A nota digitada é inválida, por favor, insira uma nota válida.")
        }
    }
    else {
        console.log(input.value);
        if (input.value == "") {
                alert("Por favor, insira uma nota.")
        }
    }
    input.value = "";
}

// calcular a média
function calcMedia() {
    if (!verifica) {
        let escopo = document.createElement("div");
        let resposta = document.createElement("p");

        let media = soma / contador

        const mediaForm = media.toFixed(2);

        resposta = "A média é " + mediaForm;

        escopo.append(resposta);
        res.append(escopo);

        verifica = true;
    }
}

let adicionar = document.querySelector("#adicionar");
adicionar.addEventListener("click", () => {addNumber()});

let calc = document.querySelector("#calcular");
calc.addEventListener("click", () => {calcMedia()});