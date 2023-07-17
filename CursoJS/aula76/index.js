// heranças

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function Camisola(nome, preco, cor) {
    Produto.call(this, nome, preco, cor); //herança
}
Camisola.prototype = Object.create(Produto.prototype);

const camisola = new Camisola('Cava', 10, 'Vermelha');
camisola.aumento(10)
console.log(camisola)