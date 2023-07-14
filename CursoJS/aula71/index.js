// object.defineProperty()
// object.defineProperties()

function Produto(nome, preco, stock) {
    this.nome = nome;
    this.preco = preco;

    // Object.defineProperty(this, 'stock', {
    //     enumerable: true,       //mostra a chave
    //     value: stock,           // valor
    //     writable: false,        //contrala se pode ou não ser editada
    //     configurable: true,     // configuravel ou não permite ou não apagar por exemplo
    // });

    // Object.defineProperties(this, {
    //     nome: {
    //         enumerable: true,       
    //         value: nome,           
    //         writable: false,       
    //         configurable: true,     
    //     },
    //     preco: {
    //         enumerable: true,       
    //         value: preco,           
    //         writable: false,       
    //         configurable: true,     
    //     },
    //     stock: {
    //         enumerable: true,       
    //         value: stock,           
    //         writable: false,       
    //         configurable: true,     
    //     },
    // });
}

const p1 = new Produto('Camisola', 20, 3);
console.log(p1)