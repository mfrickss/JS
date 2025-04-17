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