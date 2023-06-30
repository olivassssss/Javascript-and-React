/* 
Primitivos - string, number, undefined, null, bigint e symbol

Referencia (mutável) - Arrays e Objectos e function
*/


//Primitivos ex:

let a = 'A'
let b = a       //copia de a, fica sempre com o valor inicial de a
console.log(a, b)

a = 'X'

console.log(a, b)


// Referencia exemplo: dependem 1 do outro

let x = [1,2,3]
let z = x

console.log(x,z)

x.push(4)
console.log(x)
console.log(x,z)

z.pop()
console.log(z)
console.log(z,x)

//com objectos

const h = {
    nome: 'Diogo',
    sobrenome: 'Oliveira' 
};

const j = h
h.nome = 'Alexandre'

console.log(j)