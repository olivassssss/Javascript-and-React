// reconstituição pela desestruturação

let a = 'A' // B
let b = 'B' // C
let c = 'C' // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c)


const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000];

// const primeiroNumero = numeros[0];
// console.log(primeiroNumero);


// ...rest (operator) e ...spread (operator)

const [primeiroNumero, segundoNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero);

console.log(resto)


//                     0          1          2
//                  0  1  2    0  1  2    0  1  2 
const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(numeros2[1][2])

// OU

const [lista1, lista2, lista3] = numeros2
console.log(lista2[2])