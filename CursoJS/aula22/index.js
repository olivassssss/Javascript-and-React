/*

operadores lógicos
&& -> AND -> E
|| -> OR -> OU
!  -> NOT -> NEGACAO
*/

//VERIFICAR SE TENHO DINHEIRO NO BOLSO E SOL LÁ FORA

let dinheiro = true;
let sol = true;

console.log(dinheiro === true && sol === true)

// VERIFICAR SE TENHO DINHEIRO OU ESTA SOL LA FORA

console.log(dinheiro === true || sol === false) || console.log(dinheiro === false || sol === true)

//VERIFICAR SE NÃO TENHO DINHEIRO E/OU NÃO ESTÁ SOL LA FORA

console.log(!true) // = false
console.log(!false) // = true