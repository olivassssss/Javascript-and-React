

// for in

const frutas = ['Laranja', 'Pera', 'Maçã', 'Uva'];

for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Diogo',
    sobrenome: 'Oliveira',
    idade: 27
}

for (let chave in pessoa) {
    console.log(chave, ':', pessoa[chave]);
}