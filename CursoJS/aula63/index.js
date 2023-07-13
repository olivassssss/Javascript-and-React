// splice

const nomes = ['Maria', 'João', 'Diogo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, delete, elem1, elem2, elem3)
//pop

// const removidos = nomes.splice(3, 1, 'Manuel');
// console.log(nomes, removidos)

//push - adicionar no fim

nomes.splice(nomes.length, 1, 'Luiz')
console.log(nomes)

//unshift - adicionar no inicio

nomes.splice(0, 0, 'Luiz', 'Ricardo', 'Zé')
console.log(nomes)