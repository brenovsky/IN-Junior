import {loadLobinhos} from "./API-falsa.js"

function get_wolf(wolf1, wolf2){
    // let image1 = document.createElement("img")
    // let image2 = document.createElement("img")

    // let wolf1_nome1 = document.createElement("h1")
    // wolf1_nome1.className.add("wolf_name")
    // let wolf1_idade1 = document.createElement("p")
    // wolf1_idade1.className.add("wolf_age")
    // let wolf1_desc1 = document.querySelector("p")
    // wolf1_desc1.classList.add("wolf_p")


    // let wolf1_nome2 = document.createElement("h1")
    // wolf1_nome2.className.add("wolf_name")
    // let wolf1_idade2 = document.createElement("p")
    // wolf1_idade2.className.add("wolf_age")
    // let wolf1_des2 = document.querySelector("p")
    // wolf1_des2.classList.add("wolf_p")

    // wolf1_nome1.innerText = wolf1.nome
    // wolf1_idade1.innerText= "Idade: " + wolf1.idade + " anos"
    // wolf1_desc1.innerText = wolf1.descricao

    // wolf1_nome1.innerText = wolf.nome
    // wolf1_idade1.innerText= "Idade: " + wolf1.idade + " anos"
    // wolf1_desc1.innerText = wolf1.descricao


    // image1.setAttribute("src", wolf1.imagem)
    // image2.setAttribute("src", wolf2.imagem)

    // image1.classList.add("img")
    // image2.classList.add("img")

    // let wolf_exemples1 = document.querySelector("#wolf_1")
    // let wolf_exemples2 = document.querySelector("#wolf_2")

    // wolf_exemples1.append(image1)
    // wolf_exemples2.append(image2) 

    // Criei as imagens
    let image1 = document.createElement("img")
    let image2 = document.createElement("img")
    // Criei as imagens



    // Criei e coloquei as classe do lobo1
    let wolf1_nome1 = document.createElement("h1")
    wolf1_nome1.classList.add("wolf_name")
    let wolf1_idade1 = document.createElement("p")
    wolf1_idade1.classList.add("wolf_age")
    let wolf1_desc1 = document.createElement("p")
    wolf1_desc1.classList.add("wolf_p")
    // Criei e coloquei as classe do lobo1
    
    // Coloquei o texto da API no lobo1
    wolf1_nome1.innerText = wolf1.nome
    wolf1_idade1.innerText= "Idade: " + wolf1.idade + " anos"
    wolf1_desc1.innerText = wolf1.descricao
    // Coloquei o texto da API no lobo1


    // Criei e coloquei as classe do lobo2 e os id's
    let wolf2_nome = document.createElement("h1")
    wolf2_nome.classList.add("wolf_name")
    let wolf2_idade = document.createElement("p")
    wolf2_idade.classList.add("wolf_age")
    let wolf2_desc = document.querySelector("p")
    wolf2_desc.classList.add("wolf_p")

    wolf2_nome.id = "wolf_name_2"
    wolf2_idade.id = "wolf_age_2"
    wolf2_desc.id = "wolf_p_2"
    // Criei e coloquei as classe do lobo2 e os id's

    // Coloquei o texto da API no lobo2
    wolf2_nome.innerText = wolf2.nome
    wolf2_idade.innerText= "Idade: " + wolf2.idade + " anos"
    wolf2_desc.innerText = wolf2.descricao
    // Coloquei o texto da API no lobo


    // Criei e coloquei o atributo nas imagens junto com as classes
    image1.setAttribute("src", wolf1.imagem)
    image2.setAttribute("src", wolf2.imagem)

    image1.classList.add("img")
    image2.classList.add("img")
    // Criei e coloquei o atributo nas imagens junto com as classes



    let wolf_exemples1 = document.querySelector("#wolf_1")
    let wolf_exemples2 = document.querySelector("#wolf_2")

    let text_group2 = document.querySelector("#text_group")

    text_group2.append(wolf2_nome)
    text_group2.append(wolf2_idade)

    let wolf_exemplo_text_1 = document.querySelector(".wolf_exemplo_text")
    let wolf_exemplo_text_2 = document.querySelector("#wolf_exemplo_text_2")

    wolf_exemplo_text_2.append(wolf2_desc)

    wolf_exemples1.append(wolf1_desc1)

    wolf_exemplo_text_2.append(wolf2_nome)
    wolf_exemplo_text_2.append(wolf2_idade)
    wolf_exemplo_text_2.append(wolf2_desc)

    wolf_exemples1.append(image1)
    wolf_exemples2.append(image2) 

    wolf_exemplo_text_1.append(wolf1_nome1)
    wolf_exemplo_text_1.append(wolf1_idade1)
    wolf_exemplo_text_1.append(wolf1_desc1)
}


async function get_wolf_api(){

    let lobinhos = await loadLobinhos();
    
    let index1 = Math.floor(Math.random() * lobinhos.length)
    let index2 = Math.floor(Math.random() * lobinhos.length)



    const fetchConfig = {
        "method": "GET",
    } 

    fetch("lobinhos.json", fetchConfig)
        .then((message)=>{
            message.json().then((response)=>{
                let wolf1 = response[index1]
                let wolf2 = response[index2]
                get_wolf(wolf1, wolf2)
            })
            .catch((err)=>{
                console.log(err)
            })
        })
        .catch((err)=>{
            console.log(err)
        }) 
}


window.addEventListener('load', get_wolf_api())
