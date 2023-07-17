//Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// instancia

const pessoa1 = new Pessoa('Diogo', 'Oliveira');
const pessoa2 = new Pessoa('Sara', 'Santos');
const pessoa3 = new Pessoa('Rosa', 'Oliveira');

console.dir(pessoa1)
console.dir(pessoa2)
console.dir(pessoa3.nomeCompleto())


