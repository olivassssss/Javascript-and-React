
/*
&& -> false && true -> false
|| -> treu && true -> vai retornar o valor verdadeiro


VALORES FALSY (avaliados em falso) -> false, 0, '', "", ``, null/undefined, NaN

*/

//avaliação de curto circuito para quando encontra um falso

function dizOla() {
    return 'Olá';
};

let vaiExecutar = false

console.log(vaiExecutar && dizOla());

vaiExecutar = true

console.log(vaiExecutar && dizOla());


console.log(0 || false || null || 'Diogo Oliveira' || true)  // retorna 'Diogo Oliveira' pois é o primeiro valor verdadeiro

const corUsuario = null;
const corPadrao = 'preto'

console.log(corUsuario || corPadrao) // retorna corPadrao pois é a primeira verdadeira

const corUsuarioo = 'amarelo';
const corPadraoo = 'preto'

console.log(corUsuario || corPadrao) // retorna corUsuario pois é a primeira verdadeira


