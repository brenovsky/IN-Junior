export const filePath = "../lobinhos.json";

export async function loadLobinhos() {
    const fetchConfig = {
        "method": "GET"
    }

    let lobinhos = [];

    const resposta = await fetch(filePath, fetchConfig);
    const data = await resposta.json();

    data.forEach((l) => lobinhos.push(l));

    return lobinhos;
}

export async function getLobinhoById(id) {
    let lobinhos = await loadLobinhos();
    return lobinhos[id - 1];
}


export async function postLobinho(nome, idade, descricao, imagem, adotado=false, nomeDono=null, idadeDono=null, emailDono=null) {
    let lobinhos = await loadLobinhos();

    let novo_lobinho = {
        "id": lobinhos.length + 1,
        "nome": nome,
        "idade": idade,
        "descricao": descricao,
        "imagem": imagem,
        "adotado": adotado,
        "nomeDono": nomeDono,
        "idadeDono": idadeDono,
        "emailDono": emailDono,
    }

    lobinhos.push(novo_lobinho);

    console.log("DEPOIS DA ADIÇÃO:", lobinhos);

    console.log("STRINGIFY:", JSON.stringify(lobinhos))
    // sobrescrever o arquivo .json com lobinhos

    // lobinhos = await loadLobinhos();
    console.log("DEPOIS DA ESCRITA:", lobinhos);
}
