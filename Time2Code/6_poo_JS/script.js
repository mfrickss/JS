// 1 - metódos
const animal = {
  nome: "Marri",
  latir: function () {
    console.log("Au au");
  },
};

console.log(animal.nome);

animal.latir();

// 2 - aprofundando em métodos

const pessoa = {
  nome: "Ricks",
  getNome: function () {
    return this.nome;
  },
  setNome: function (novoNome) {
    this.nome = novoNome;
  },
};

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Pedro");

console.log(pessoa.getNome());

// 3 - prototype

const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.length);

console.log(Object.getPrototypeOf(arr));
console.log(Object.getPrototypeOf(arr) === Array.prototype);

// 4 - mais sobre prototype

const myObject = {
  a: "Olá",
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// classes basicas

const cachorro = {
  raca: null,
  patas: 4,
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);
console.log(bulldog.patas);
