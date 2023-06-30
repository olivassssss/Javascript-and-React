

const nome = "Diogo"
const sobrenome = "Oliveira"
const idade = 27;
const peso = 116;
const alturaEmM = 1.80;

let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;


console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg, tem", alturaEmM, "de altura, e seu IMC é de", imc, ".")
console.log("Nasceu em", anoNascimento, ".");