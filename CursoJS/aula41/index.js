// escreva uma função que receba 2 números e retorne o maior deles

// let num1 = document.querySelector('.input1');
// let num2 = document.querySelector('.input2');;


let num1 = prompt('Digite o primeiro número: ');
let num2 = prompt('Digite o segundo número: ');

const container = document.querySelector('.container')
const p = document.createElement('p')
const div = document.createElement('div')

num1 = Number(num1);
num2 = Number(num2);

if (num1 > num2) {
    p.innerHTML = `O número maior é: ${num1}`;
} 
else if (num2 > num1) {
    p.innerHTML = `O número maior é: ${num2}`;
}
else if (num1 === num2) {
    p.innerHTML = `Números iguais: ${num1}`;
}

div.appendChild(p);
container.appendChild(div)