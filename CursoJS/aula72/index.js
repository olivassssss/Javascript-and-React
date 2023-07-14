// object.defineProperty()
// object.defineProperties()
// getters e setters

function Produto(nome, preco, stock) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'stock', {
        enumerable: true,       //mostra a chave
        configurable: true,     // configuravel ou não permite ou não apagar por exemplo
        get: function() {
            return stock;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeError("Preço precisa ser um número");
            } else {
                stock = valor;
            }
        }
    });
};

const p1 = new Produto('Camisola', 20, 'arroz');
console.log(p1)
console.log(p1.stock)