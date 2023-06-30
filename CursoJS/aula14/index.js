
let num1 = 10
let num2 = 2.5

// console.log(num1.toString() + num2)
// num1 = num1.toString()
// console.log(num1.toString(2))
// console.log(num1.toFixed(2))

console.log(Number.isInteger(num1)) // retorna true or false para numeros inteiros

let temp = num1 + '5'

console.log(Number.isNaN(temp)) // isNaN = Not a Number para resultados invalidos

// contas de numeros nao inteiros

let numm1 = 0.7
let numm2 = 0.1

numm1 += numm2
numm1 += numm2
numm1 += numm2
numm1 += numm2
numm1 += numm2
numm1 += numm2
numm1 += numm2
numm1 += numm2

num1 = Number(numm1.toFixed(2))

console.log(numm1)

// dar fiz à imprecisão

let nummm1 = 0.7
let nummm2 = 0.1

nummm1 = ((nummm1 * 100) + (nummm2 * 100)) / 100
nummm1 = ((nummm1 * 100) + (nummm2 * 100)) / 100
nummm1 = ((nummm1 * 100) + (nummm2 * 100)) / 100

console.log(nummm1)
console.log(Number.isInteger(nummm1))