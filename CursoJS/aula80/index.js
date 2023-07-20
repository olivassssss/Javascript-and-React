// estrutura de dados

// Map

const pessoas = [
    { id: 3, nome: 'Diogo'},
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'João'},
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas)
console.log(novasPessoas.get(2))  // retorna a chave com o get