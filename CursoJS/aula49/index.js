// funções - declaração

const souUmDado = function () {
    console.log('Sou um dado!');
}; souUmDado();

function executaFuncao(funcao) {
    console.log('vou executar a função abaixo');
    funcao();
} executaFuncao(souUmDado);

//arrow functions

const arrow = () => {
    console.log('sou uma arrow function')
}; arrow();

// dentro de um objecto

const obj = {
    falar: function() {
        console.log('estou a falar')
    }
}; obj.falar();