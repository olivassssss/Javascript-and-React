
function saudacao(nome) {
    // console.log(`Bom dia ${nome}`);
    return `Bom dia ${nome}`;
}

const variavel = saudacao('Diogo');
// saudacao('Maria')

console.log(variavel);


function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2,2));

const raiz = function (n) {
    return n ** 0.5
};

console.log(raiz(9))

const raizz = (n) => n ** 0.5 // arrow function para situação de 1 parametro