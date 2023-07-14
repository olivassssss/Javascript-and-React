// metodos uteis para objetos
/*
Object.assign(des, any)
Object.getOwnPropertyDescription(o, 'prop')

Object.keys (retorna chaves)
Object.freeze(congela obj)
Object.defineProperty()
Object.defineProperties()
*/
const produto = { nome: 'Caneca', preco: 1.8 };
const outraCoisa = produto;

const caneca = Object.assign({}, produto, {material: 'Porcelana'});

console.log(caneca)

