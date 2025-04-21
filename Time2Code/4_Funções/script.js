// 1 - criando função $$ return

function myFunction() {
    console.log("Testando")
}

myFunction();
myFunction();

const myFunctionVariable = function() {
    console.log("Função em variável");
}

myFunctionVariable();

function functionArg(txt) {
    console.log(`Imprimindo: ${txt}`)
}

functionArg("Imprimindo alguma coisa");
functionArg("Outra função");

function soma(a, b){
    c = a + b;
    console.log(`Soma: ${a} + ${b} = ${c}`);
}

function sub(a, b){
    c = a - b;
    console.log(`Subtração: ${a} - ${b} = ${c}`);
}

function multiplicação(a, b){
    c = a * b;
    console.log(`Multiplicação: ${a} * ${b} = ${c}`);
}

function divisao(a, b){
    return  a / b;
}

const resultado = divisao(144, 12);

soma(5, 8);
sub(22, 13);
multiplicação(9, 9);
console.log(`Divisão: ${resultado}`);

const d = 30;
const e = 40;

function sum(n1, n2){
    return n1 + n2;
}

console.log(`Sum = ${sum(d, e)}` );

// 2 - function scope && nasted scopes

let y = 15; // y fora da função pode ser de um valor diferente.

function testandoEscopo(){
    let y = 20;
    console.log(`Y dentro da função é: ${y}`);
}

testandoEscopo();

console.log(`Y fora da função é: ${y}`);

testandoEscopo();

let m = 10;

function nastedScope(){  //Manteve a ordem de execução com os valores aninhados.
    let m = 20;

    if(true){
        let m = 30;

        if(true){
            let m = 40;
            console.log(m);
        }

        console.log(m);
    }
    console.log(m);
}

nastedScope();

console.log(m);

// 3 - Arrow function

const testeArrow = () => {
    console.log("Esta é uma arrow function");
}

testeArrow();

const parOuImpar = (n) => {
    if(n % 2 === 0){
        console.log("Par");
        return
    }
    console.log("Ímpar");
}

parOuImpar(5);

parOuImpar(10);

const raizQuadrada = (x) => {
    return x * x
}
console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(5));
console.log(raizQuadrada2(12));

const helloWorld = () => console.log("Hello world");

helloWorld();

console.log(helloWorld()); //=undefined


// 4 - parametro opcional

const multiplication = function (m, n){
    if( n === undefined){
        return m * 2;
    } else{
        return m * n;
    }
}

console.log(multiplication(5));

console.log(multiplication(2,4));

const greeting = (name) => {
    if (!name){
        console.log("Olá!")
        return
    }
    console.log(`Olá ${name}!`);
}

greeting();

greeting("Ricardo");

// 5 - valor default

const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}`;
}
console.log(customGreeting("Ricardo"));
console.log(customGreeting("Jonas", "Bom dia"));

const repeatText= (text, reapeat = 2) => {
    for(let i = 0; i < reapeat; i++)
        console.log(text);
};

repeatText("Testando");

repeatText("MFRICKS", 5);

// 6 - closure

function someFunction() {
    let txt = "Alguma coisa";

    function display(){
        console.log(txt);
    }

    display();
}

someFunction();

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplicationClosure(5);

const c2 = multiplicationClosure(10);

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));


// 7 - recursion

const untilTen = (n, m) => {
    if(n < 10){
        console.log("A função para de executar!")
    }else{
        const x = n - m;
        console.log(x);
        untilTen(x, m);
    }
}

untilTen(100, 7);

// infinite recursion {
// function run() {
//     console.log("Executando...");
//     run();
// }
// run();
// }


function factorial(x){
    if( x === 0){
        return 1 
    }else{
        return x * factorial(x - 1);
    }
}

const num = 6;

const result = factorial(num);

console.log(`O fatorial do número ${num} é ${result}.`);