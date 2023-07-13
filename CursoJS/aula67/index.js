// reduce - reduzir o array para um obj

// Some todos os valores com reduce
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor
    return acumulador
}, 0)

console.log(total)

// retorne um array com os pares com o filter

const pares = numeros.filter(valor => !(valor % 2))
console.log(pares)


// retorne um array com o dobro dos valores com o map

const dobro = numeros.map(valor => valor * 2)
console.log(dobro)
