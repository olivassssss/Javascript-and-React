// factory functions.
// prototypes
const falar = {
    falar() {
    console.log(`${this.nome} está a falar`)
    }
}

const comer = {
    comer() {
    console.log(`${this.nome} está a comer`)
    }
}

const beber = {
    beber() {
    console.log(`${this.nome} está a beber`)
    }
}

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: {value:sobrenome},
    })
    
}

const p1 = criaPessoa('Diogo', 'Oliveira')

console.log(p1)
console.log(p1.falar())
console.log(p1.comer())
console.log(p1.beber())