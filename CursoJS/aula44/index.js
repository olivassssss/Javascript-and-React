// try catch throw de erros

// try {
//     console.log(naoExiste)
// } catch (erro) {
//     console.log('houve um erro')
//     console.log(erro)  //não é suposto o usuario ver este log
// }


function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error ('argumentos invalidos');
    }
    return x + y;
}

try {
    console.log(soma(1, 2))
    console.log(soma(1, '2'))
} catch (erro) {
    console.log(erro)
}
