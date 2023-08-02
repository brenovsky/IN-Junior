class Visualizador {
    paginacao_range = 2;
    items_per_page = 6;

    constructor(lobinhos, adotados=false) {
        this.lobinhos = lobinhos;

        this.lobinhos_adotados = [];
        this.lobinhos_nao_adotados = [];
        for (let lobinho of this.lobinhos) {
            if (lobinho.adotado) {
                this.lobinhos_adotados.push(lobinho);
            }
            else {
                this.lobinhos_nao_adotados.push(lobinho);
            }
        }

        this.adotados = adotados;

        this.resetLista();
    }

    resetLista(adotados=null) {
        if (adotados != null) {
            this.adotados = adotados;
        }

        if (this.adotados) {
            this.updateLista(this.lobinhos_adotados);
        }
        else {
            this.updateLista(this.lobinhos_nao_adotados);;
        }
    }

    updateLista(new_lista) {
        this.lista_atual = new_lista;

        this.pagina_index = 0;
        this.page_first_item_index = 0;
        this.last_page_index = Math.ceil(this.lista_atual.length / this.items_per_page);
        this.last_item_index = this.lista_atual.length - 1;

        this.render();
    }

    search(substring) {
        console.log(`pesquisando por ${substring}`);

        this.resetLista();
        this.updateLista(this.lista_atual.filter((lobo) =>
            lobo.nome.toLowerCase().includes(substring.toLowerCase())
        ));

        console.log(`${this.lista_atual.length} resultados encontrados`);
    }

    movePage(step) {
        if (0 > this.pagina_index + step || this.pagina_index + step > this.last_page_index) { // adicionar verificação de ultima pagina
            return
        }
        this.pagina_index += step;
        this.page_first_item_index += step * this.items_per_page;

        this.render();
        
        console.log(`movendo pagina com passo ${step}`);
    }
    
    setPage(index) {
        this.pagina_index = index - 1;
        this.page_first_item_index = this.pagina_index * this.items_per_page;
        
        this.render();

        console.log(`settando pagina para ${index}. o primeiro item é ${this.page_first_item_index}`)
    }

    renderPaginacao() {
        paginacao.innerHTML = "";

        let p = document.createElement("p");
        p.textContent = "<<";
        p.addEventListener("click", () => this.setPage(1));
        paginacao.append(p);

        for (let i = this.paginacao_range; i > 0 ; i--) {
            let index = this.pagina_index - i
            if (index < 0) {  // ver pagina final
                continue
            }

            p = document.createElement("p");
            p.textContent = (index + 1).toString();
            p.addEventListener("click", () => this.movePage(-i));
            paginacao.append(p);
        }

        p = document.createElement("p");
        p.textContent = (this.pagina_index + 1).toString();
        p.classList.add("selected");
        paginacao.append(p);

        for (let i = 1; i <= this.paginacao_range; i++) {
            let index = this.pagina_index + i;
            if (index >= this.last_page_index) {  // ver pagina final
                break;
            }

            p = document.createElement("p");
            p.textContent = (index + 1).toString();
            p.addEventListener("click", () => this.movePage(i));
            paginacao.append(p);
        }

        p = document.createElement("p");
        p.textContent = ">>";
        p.addEventListener("click", () => this.setPage(this.last_page_index));
        paginacao.append(p);
    }

    renderPage() {
        lobos_section.innerHTML = "";

        let first_index = this.page_first_item_index;
        let last_index = Math.min(this.page_first_item_index + this.items_per_page - 1, this.last_item_index);

        console.log(`renderizando página ${this.pagina_index + 1}`)
        console.log(`partir do item ${first_index} até o item ${last_index}`);
        
        if (last_index == -1) { // não há lobinhos para serem renderizados
            lobos_section.innerHTML = "<h1>NÃO HÁ LOBINHOS<h1>";
        }

        for (let i = first_index; i <= last_index; i++) {
            let lobo = this.lista_atual[i];

            let card = document.createElement("div");
            card.classList.add("card-lobo");
            if (i % 2) {
                card.classList.add("reverse");
            }

            let figure = document.createElement("figure");
            figure.classList.add("figure-lobo");
            card.append(figure);

            let img_lobo_bg = document.createElement("div");
            img_lobo_bg.classList.add("img-lobo-background")
            figure.append(img_lobo_bg)

            let img_lobo = document.createElement("img");
            img_lobo.classList.add("img-lobo");
            img_lobo.src = lobo.imagem;
            figure.append(img_lobo);

            let div = document.createElement("div");
            card.append(div);

            let titulo = document.createElement("div");
            titulo.classList.add("titulo");
            div.append(titulo);

            let nome_e_idade = document.createElement("div");
            nome_e_idade.classList.add("nome-e-idade");
            titulo.append(nome_e_idade);

            let h1 = document.createElement("h1");
            h1.textContent = lobo.nome;
            nome_e_idade.append(h1);

            let h2 = document.createElement("h2");
            h2.textContent = `Idade: ${lobo.idade} anos`;
            nome_e_idade.append(h2);

            let botao = document.createElement("button");
            botao.classList.add("adotar-button");
            botao.textContent = "Adotar";
            botao.addEventListener("click", () => {
                location.href = `show-lobinho.html?id=${lobo.id}`
            })
            titulo.append(botao);

            let p = document.createElement("p");
            p.textContent = lobo.descricao;
            div.append(p);

            if (lobo.adotado) {
                card.classList.add("adotado");

                botao.textContent = "Adotado";
                botao.disabled = true;

                let h3 = document.createElement("h3");
                h3.textContent = `Adotado por: ${lobo.nomeDono}`;
                div.append(h3);
            }

            lobos_section.append(card);
        }
    }

    render() {
        this.renderPage();
        this.renderPaginacao();
    }
}

import {loadLobinhos} from "./API-falsa.js"

const localSrc = "./lobinhos.json";

var paginacao = document.getElementById("pages");
var search_input = document.getElementById("input-pesquisa");
var search_button = document.getElementById("add-lobo-button");
var adotados_checkbox = document.getElementById("adotados-checkbox");
var lobos_section = document.getElementById("lobos");

loadLobinhos()
.then((lobinhos) => {
    console.log(lobinhos);
    console.log("RUNNING");

    var visualizador = new Visualizador(lobinhos);

    search_input.addEventListener("input", () => visualizador.search(search_input.value))
    search_button.addEventListener("click", () => {location.href = "addlobinhos.html";});
    adotados_checkbox.addEventListener("change", () => visualizador.resetLista(adotados_checkbox.checked))
})
