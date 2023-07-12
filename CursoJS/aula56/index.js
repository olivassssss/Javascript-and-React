// factory functions
// constructor function

function createPerson(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        //setter - para alterar atributos do objeto ao longo do código
        // set nomeCompleto(valor) {
        //     valor = valor.split(' ');
        //     this.nome = valor.shift();
        //     this.sobrenome = valor.join(' ');
        // },
        altura,
        peso,
        say: function(assunto) {
            return `${this.nome} ${this.sobrenome} está a ${assunto}.`;
        },
        imc() {             /* get (Getter)- torna a função em atributo */ 
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = createPerson('Diogo', 'Oliveira', 1.80, 115);
const p2 = createPerson('Sara', 'Santos', 1.67, 67);
console.log(p1.say('falar sobre JS'));
console.log(p2.say('apanhar uma seca'));

console.log(p1.imc());
console.log(p2.imc());

console.log(p1.nomeCompleto);
console.log(p2.nomeCompleto);






