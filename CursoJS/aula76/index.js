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
    Produto.call(this, nome, preco);        //herança
    this.cor = cor 
}
Camisola.prototype = Object.create(Produto.prototype);
Camisola.prototype.constructor = Camisola

Camisola.prototype.aumento = function(percentual) {
   this.preco = this.preco + (this.preco * (percentual / 100))
}

const camisola = new Camisola('Cava', 10, 'Vermelha');
camisola.aumento(50)
console.log(camisola)


function Caneca(nome, preco, material) {
    Produto.call(this, nome, preco);
    this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const caneca = new Caneca('Caneca', 5, 'Cerâmica');
caneca.aumento(50)
console.log(caneca)
