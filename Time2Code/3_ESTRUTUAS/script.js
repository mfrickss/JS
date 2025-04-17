// 6 - console

console.log("Teste!");
console.error("ERROU BURRÃO!");
console.warn("CUIDADO!");
 
// 7 - controle
const m = 10;

if (m > 5){
    console.log("M é maior q 5");
}

const user = "João";

if(user === "João"){
    console.log(`Olá ${user}`);
}

const loggedIn = false;

if(loggedIn){
    console.log("Você está logado!");
}else{
    console.log("Não está autenticado!");
}

const q = 10
const w = 15

if(q > 5 && w > 20){
    console.log("Números mais altos");
}else{
    console.log("Os números não são mais altos!");
}

if(1 > 2){
    console.log("False");
}
else if(2 > 3){
    console.log("False");
}
else if(5 > 4){
    console.log("True");
}

const username = "Matheus"
const userAge = 31

if(username === "José") {
    console.log("Bem vindo José!");
}else if(username === "Matheus" && userAge === 31) {
    console.log(`Olá ${username}, você tem ${userAge} anos`);
} else{
    console.log("Nenhuma condição aceita.");
}

// 8 - repetição

let p = 0;

while(p < 5){
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// while( x > 5){
//     console.log(`Imprimindo ${x}`); => looping infinito
// }

let o = 10;

do{
    console.log(`Valor de o: ${o}`);
    o--;
}while(o > 1);


for(let t = 0; t < 10; t++){
    console.log("Repetindo...");
}

let r = 0;

for(r; r > 0; r = r - 1){
    console.log(`R está diminuíndo: ${r}`);
}

// 9 - break && continue
for(let g = 20; g > 10; g--){
    console.log(`O valor de g é ${g}`);

    if(g === 12){
        console.log(`valor: ${g}`)
        break;
    }
}

for(let s = 0; s < 10; s++){
    if(s % 2 === 0){
        console.log("Número par!")
        continue; // PULA OS NÚMEROS PARES==condição!
    }
    console.log(s);
}

// 10 -  switch case

const job = "Dev"

switch(job){
    case "Advogado":
        console.log("Você é advogado.");
        break;
    case "Dev":
        console.log("Você é dev!");
        break;
    case "Engenheiro":
        console.log("Você é engenheiro.")
        break;
    default:
        console.log("Profissão não encontrada...");    
}