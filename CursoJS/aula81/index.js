// classes

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está a falar`)
    }

    comer() {
        console.log(`${this.nome} está a comer`)
    }

    beber() {
        console.log(`${this.nome} está a beber`)
    }
}

const p1 = new Pessoa('Diogo', 'Oliveira');
console.log(p1)