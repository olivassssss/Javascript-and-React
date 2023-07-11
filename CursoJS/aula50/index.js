
function funcao() {
    console.log('Olá')
} funcao('valor');

// Executa a função sem passar parâmetros, pois não houve declarações

function funcao() {
    console.log(arguments[5]);
} funcao('valor', 1, 2, 3,4,5,6);

//soma dos argumentos

function funcao() {
    let total = 0
    for (argument of arguments) {   //arguments guarda todos os argumentos passados numa função sem argumentos definidos
        total += argument;
    }

    console.log(total)
} funcao(1, 2, 3,4,5,6);