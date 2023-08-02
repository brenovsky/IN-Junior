var nossos_lobinhos = document.getElementById("nossos-lobinhos");
nossos_lobinhos.addEventListener("click", () => {
    location.href = "./lista-de-lobinhos.html";
})

var icone_lobinho = document.getElementById("icone-lobinho");
icone_lobinho.addEventListener("click", () => {
    location.href = "./index.html";
})

var quemsomos = document.getElementsByClassName("quem-somos");
console.log(quemsomos);

Array.from(quemsomos).forEach(element => {
    console.log(element);

    element.addEventListener("click", () => {
        location.href = "./quem-somos.html";
    })
});
