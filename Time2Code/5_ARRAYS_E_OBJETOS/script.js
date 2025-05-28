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

const nums = [1, 2, 3, 4, 5];

nums.forEach((numero, index) => {
  console.log(`O número ${numero} está na posição ${index}`);
});

const posts = [
  { title: "Primeiro post", category: "PHP" },
  { title: "Segundo post", category: "JavaScript" },
  { title: "Terceito post", category: "Python" },
];

posts.forEach((post) => {
  console.log(`Exibindo o post ${post.title} da categoria ${post.category}`);
});

// 16 - includes

const brands = ["Ford", "Chevrolet", "Fiat", "Volkswagen"];

console.log(brands.includes("Ford")); // true
console.log(brands.includes("Honda")); // false

if (brands.includes("Ford")) {
  console.log("A marca Ford está na lista");
}

// 17  - reverse

const n = [1, 2, 3, 4, 5];

n.reverse(); // Inverte a ordem dos elementos do array
console.log(n); // [5, 4, 3, 2, 1]
const reversedN = n.reverse(); // Inverte a ordem dos elementos do array
console.log(reversedN); // [5, 4, 3, 2, 1]

// 18 - Métodos de strings - trim
const str = "   Olá, tudo bem? \n ";

console.log(str); // "   Olá, tudo bem?"
console.log(str.trim()); // Remove os espaços em branco do início e do fim da string
console.log(str.length);
console.log(str.trim().length);

// 19 - padStart e padEnd
// Adiciona caracteres à esquerda ou à direita de uma string até atingir um determinado comprimento

const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0"); // Adiciona 0 à esquerda até completar 5 caracteres

console.log(testePadStart); // "1"
console.log(newNumber); // "0001"

const testePadEnd = newNumber.padEnd(10, "0"); // Adiciona 0 à direita até completar 5 caracteres

console.log(testePadEnd); // "0001000000"

// 20 - split

const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase); // ["O", "rato", "roeu", "a", "roupa", "do", "rei", "de", "Roma"]

if (arrayDaFrase.includes("rato")) {
  console.log("A frase contém a palavra 'rato'");
}

// 21 - join

const fraseDeNovo = arrayDaFrase.join(" "); // Junta os elementos do array em uma string, separando-os por espaço
console.log(fraseDeNovo); // "O rato roeu a roupa do rei de Roma"

const itenParaComprar = ["Mouse", "Teclado", "Monitor"];
const fraseDeCompra = `Precisamos comprar: ${itenParaComprar.join(", ")}`;
console.log(fraseDeCompra); // "Precisamos comprar: Mouse, Teclado, Monitor"

// 22 - repeat

const repetido = "Rick ".repeat(5); // Repete a string 5 vezes
console.log(repetido); // "RickRickRickRickRick"

// 23 - rest operator/parameter

const somaInfinita = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
};

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(1, 20, 34, 128812, 12723, 12, 23, 54, 12));

// 24 - for of

const somaInfinita2 = (...args) => {
  let total = 0;
  for (num of args) {
    total += num;
  }
  return total;
};

console.log(somaInfinita2(1, 2, 3));
console.log(somaInfinita2(1, 20, 34, 128812, 12723, 12, 23, 54, 12));

// 25 - Destructuring em objetos

const userDetails = {
  firstName: "Ricks",
  lastName: "MF",
  job: "Dev",
};

const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

// renomeando variaveis

const { firstName: primeiroNome } = userDetails;

console.log(primeiroNome);

// 26 - Destructuring em arrays

const myList = ["Avião", "Submarino", "Carro"];

const [veivuloA, veiculoB, veiculoC, d, e] = myList;

console.log(veivuloA, veiculoB, veiculoC);
console.log(d, e);

// 27 - JSON

const myJson =
  '{"name": "Ricks", "age": 21, "skills": ["PHP", "JavaScript", "Python"]}';

console.log(myJson);
console.log(typeof myJson);

// 28 - JSON para objeto e objeto para JSON

const myObject = JSON.parse(myJson); // JSON PARA OBJETO

console.log(myObject);

console.log(myObject.name);
console.log(myObject.age);
console.log(myObject.skills);

console.log(typeof myObject);

/*json inválido

const badJson = '{"name": Ricks, "age": 31}';

const myBadObject = JSON.parse(badJson); */

myObject.isOpenToWork = true;

console.log(myObject);

const myNewJson = JSON.stringify(myObject); // OBJETO PARA JSON

console.log(myNewJson);
console.log(typeof myNewJson);
