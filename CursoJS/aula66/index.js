// map - modificar arrays

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const dobro = numeros.map(valor => valor * 2); // retorna o número multiplicado por 2 para cada

// console.log(dobro)

// retorne apenas uma string com o nome da pessoa
// remova apenas a chave nome do obj
// adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nome = pessoas.map(obj => obj.nome)
const nomeString = pessoas.map(obj => obj.nome.split(' '))

console.log(nome)
console.log(nomeString)


const idadesChave = pessoas.map(function(obj) {
    return { idade: obj.idade }
})
console.log(idadesChave)

const idades = pessoas.map(obj => obj.idade)
console.log(idades)

const idChave = pessoas.map(function(obj, indice) {
    obj.id = indice
    return obj
})

console.log(idChave)