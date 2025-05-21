// 1 - arrays
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(lista);

const itens = ["ricks", true, 2, 3.14, [1, 2, 3], { nome: "Rick" }];
console.log(itens);
console.log(typeof itens);

// - 2 mais sobre arrays
const array = ["a", "b", "c", "d", "e"];

console.log(array);
console.log(array[0]); // a
console.log(array[2]); // c
console.log(array[34]); // undefined

// - 3 propriedades

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.length);

console.log(numbers["length"]);

const myName = "Rick";

console.log(myName.length);

// 4 - métodos
const otherNumbers = [21, 23, 33, 43, 325, 632, 7, 8, 9];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "Olá, tudo bem?";

console.log(text.toUpperCase());
console.log(typeof text.toUpperCase());

console.log(text.indexOf(","));

// 5 - Objetos
const person = {
  name: "Ricks",
  age: 21,
  job: "Programador",
};

console.log(person);
console.log(person.name);
console.log(person["name"]);
console.log(person.name.length);
console.log(typeof person);

// 6 - Criando e deletando propriedades

const car = {
  engine: 2.0,
  brand: "Ford",
  model: "Fusion",
  km: 0,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// 7 - mais sobre objetos
// const pode ser mudado quanddo o objeto é um array

const obj = {
  a: "teste",
  b: true,
};

console.log(obj instanceof Object);

const obj2 = {
  c: [],
};

Object.assign(obj2, obj);

console.log(obj2);

//8 - metodo keys e entries
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(obj));
console.log(Object.entries(obj2));
console.log(Object.entries(car));

// 9 - Mutação de objetos

const a = {
  name: "Ricks",
};

const b = a; // b é uma referência ao mesmo objeto que a
// Isso significa que qualquer alteração feita em a também afetará b e vice-versa.

console.log(a);
console.log(b);

console.log(a === b); // true

a.age = 21;

console.log(a);
console.log(b);

delete b.age; // Deletando a propriedade age do objeto b, que também afeta o objeto a.
// Isso acontece porque a e b referenciam o mesmo objeto na memória.

console.log(a);
console.log(b);

// 10 - Loop em array
const users = ["Ricks", "Mateus", "Lucas", "João", "Maria"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando o usuário: ${users[i]}`);
}

// 11 - push e pop

const listinha = ["a", "b", "c", "d", "e"];

array.push("f"); // Adiciona o elemento "f" ao final do array

console.log(array);

console.log(array.length); // 6

array.pop(); // Remove o último elemento do array
console.log(array); //

const itemRemovido = array.pop(); // Remove o último elemento do array e armazena na variável itemRemovido
console.log(itemRemovido); // "f"
console.log(array); // ["a", "b", "c", "d", "e"]

array.push("g", "x", "r");
console.log(array); // ["a", "b", "c", "d", "e", "g", "x", "r"]
console.log(array.length); // 8
listinha.pop;

// 12 - shift e unshift
const letters = ["a", "b", "c", "d", "e"];

const letter = letters.shift(); // Remove o primeiro elemento do array e armazena na variável letter
console.log(letter); // "a"
console.log(letters); // ["b", "c", "d", "e"]

letters.unshift("z"); // Adiciona o elemento "z" ao início do array
console.log(letters); // ["z", "b", "c", "d", "e"]
letters.unshift("x", "y", "w"); // Adiciona os elementos "w", "x" e "y" ao início do array
console.log(letters); // ["w", "x", "y", "z", "b", "c", "d", "e"]

// 13 - indexOf e lastIndexOf

const myElements = ["Abacate", "Banana", "Cenoura", "Maça", "Abacate"];

console.log(myElements.indexOf("Abacate")); // 0
console.log(myElements.indexOf("Banana")); // 1

console.log(myElements[2]); // Cenoura
console.log(myElements[myElements.indexOf("Cenoura")]); // Cenoura

console.log(myElements.lastIndexOf("Abacate")); // 4 - último índice dos repetidos

console.log(myElements.indexOf("Mamão")); // -1
console.log(myElements.lastIndexOf("Mamão")); // -1

// 14 - slice

const myArray = ["a", "b", "c", "d", "e", "f", "g"];
console.log(myArray);
const slicedArray = myArray.slice(0, 4 + 1); // Pega os elementos do índice 0 ao 4 (4 não incluído, mas o +1 pode ser adicionado)
console.log(slicedArray); // ["a", "b", "c", "d"]
// se passar indices negativos, ele conta de trás para frente
const slicedArray2 = myArray.slice(-3); // Pega os últimos 3 elementos do array
console.log(slicedArray2); // ["e", "f", "g"]
// se passar indices q nao existem, ele retorna um array vazio
const slicedArray3 = myArray.slice(10, 100);
console.log(slicedArray3); // []

const slicedArray4 = myArray.slice(2); // a partir do índice 2
console.log(slicedArray4); // ["c", "d", "e", "f", "g"]

// 15 - ForEach

const fruits = ["banana", "maça", "laranja", "uva", "abacaxi"];

fruits.forEach((fruits, index) => {
  console.log(`A fruta ${fruits} está na posição ${index}`);
});
