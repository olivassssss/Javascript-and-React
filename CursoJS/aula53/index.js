// closures - habilidade de aceder ao seu scope

function retornaFuncao(nome) {
    return function() {
        return nome
    };
};

const funcao = retornaFuncao('Diogo');
console.log(funcao)