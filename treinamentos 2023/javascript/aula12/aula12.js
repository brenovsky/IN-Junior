// objetos
let dog = {
    dogName: "Biruta", // chave: valor,
    weight: 5,
    color: "azul",
    breed: "border collie",
    age: 3
}

// uptade no objeto
dog.age += dog.age;
console.log(dog)

// fazer loop no objeto
for (let chave in dog) {
    console.log(chave);
    console.log(dog[chave]);
}

// Objetos dentro de objetos:
let person = { 
    personName: "Breno",
    vacinas: {
        type: "A",
        nameVaccine: "vacina antirrábica",
        date: "01/01/2020"
    },
    pais: ["pai", "mãe"] // arrays dentro de objetos
}

console.log(person.pais[0])