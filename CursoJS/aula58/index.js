// função construtora -> objetos - função (new) Pessoa 
//função fabrica -> objetos 

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método')
    };
}

const p1 = new Pessoa('Diogo', 'Oliveira');
const p2 = new Pessoa('Sara', 'Santos');

p1.metodo();
p2.metodo();