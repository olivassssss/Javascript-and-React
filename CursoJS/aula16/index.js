

// arrays

const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos)

alunos[0] = 'Eduardo'
alunos[3] = 'Luisa'
console.log(alunos)

console.log(alunos.length)  // verifica quantos elementos tem

alunos.push('Diogo', 'Ricardo', 'Mariana') // adiciona elementos no fim
console.log(alunos.length)
console.log(alunos)

alunos.unshift('Manuel')  // adiciona elementos no inicio
console.log(alunos.length)
console.log(alunos)

alunos.pop()  //remove 1 elemento do final
console.log(alunos.length)
console.log(alunos)

alunos.shift() //remove 1 elemento do inicio
console.log(alunos.length)
console.log(alunos)

delete alunos[1]; //remove da posição expecificada no array 
console.log(alunos.length)
console.log(alunos)
alunos[1] = 'Maria'

console.log(alunos.slice(0, 3))
console.log(alunos.slice(0, -1))


