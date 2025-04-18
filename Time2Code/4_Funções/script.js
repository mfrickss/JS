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

