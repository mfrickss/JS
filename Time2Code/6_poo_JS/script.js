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

// 5 - classes basicas

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

// 6 - função como classe - função construtora

function criarCachorro(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const marri = criarCachorro("Marri", "Schnauzer");

console.log(marri);

const teo = criarCachorro("Teo", "Yorkshare");

console.log(teo);

console.log(Object.getPrototypeOf(teo));

// 7 - função como classe

function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky);

// 8 - métodos na função construtora

Cachorro.prototype.uivar = function () {
  console.log("Auuuuuuuuu!");
};

console.log(Cachorro.prototype);

husky.uivar();

// 9 - Classes ES6 - USADO DE VERDADE
class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const throffin = new CachorroClasse("Thorfinn", "Border Collie");

console.log(throffin);

console.log(Object.getPrototypeOf(throffin));

// 10 - mais sobre classes

class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }

  descreverCaminhao() {
    console.log(
      `Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}.`
    );
  }
}

const scania = new Caminhao(6, "Vermelha");

console.log(scania);
console.log(scania.eixos);
console.log(scania.cor);
scania.descreverCaminhao();

Caminhao.motor = 4; // não funciona

const c2 = new Caminhao(4, "Preta");

console.log(c2);

console.log(c2.motor); // não funciona

Caminhao.prototype.motor = 4.0;

const c3 = new Caminhao(6, "Azul");

console.log(c3.motor);
