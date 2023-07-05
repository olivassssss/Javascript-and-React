const pessoa = {
    nome: 'Diogo',
    sobrenome: 'Oliveira',
    idade: 27,
    endereco: {
        rua: 'Cimo de vila',
        numero: 110
    } 
};

// Atribuição via destruturação

const {nome, sobrenome, idade} = pessoa
console.log(nome, sobrenome, idade)