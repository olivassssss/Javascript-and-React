// objectos

// const pessoa1 = {
//     nome: 'Diogo',
//     sobrenome: 'Oliveira',
//     idade: 27
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

// criar função de atribuição de classes

// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade,
//     }; 
// };

// const pessoa1 = criaPessoa('Diogo', 'Oliveira', 27)
// const pessoa2 = criaPessoa('Xano', 'Sabença', 22)
// const pessoa3 = criaPessoa('Rui', 'Santos', 30)
// const pessoa4 = criaPessoa('Lara', 'Miranda', 55)
// const pessoa5 = criaPessoa('Sara', 'Oliveira', 30)


const pessoa1 = {
    nome: 'Diogo',
    sobrenome: 'Oliveira',
    idade: 27,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} esta falando oi....`)
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()


