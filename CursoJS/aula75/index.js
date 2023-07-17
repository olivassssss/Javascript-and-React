// // novo objecto

// const objA = {
//     chaveA: 'A',
//     // __proto__: Object.prototype
// }


// const objB = {
//     chaveB: 'B',
//     // __proto__: ObjA
// }

// const objC = new Object(); 
// objC.chaveC = 'C'

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objC.chaveB)

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}


Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
};

const p1 = new Produto('Camisola', 50)
p1.desconto(50)
console.log(p1)
p1.aumento(50)
console.log(p1)


const p2 = {
    nome: 'Caneca',
    preco: 100,
}

Object.setPrototypeOf(p2, p1);

p2.desconto(50)
console.log(p2)
p2.aumento(50)
console.log(p2)
