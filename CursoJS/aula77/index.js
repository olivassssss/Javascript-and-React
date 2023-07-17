// validador de cpf

//  705.484.450-52  070.987.720-03

/* 
7x  0x  5x  4x  8x  4x  4x  5x  0x  - Primeiro 9 digitos
10  9   8   7   6   5   4   3   2   - contagem regressiva de 10
70  0   40  28  48  20  16  15  0   = 237


7x  0x  5x  4x  8x  4x  4x  5x  0x  5x  - Primeiro 9 digitos + o gerado anteriormente
11  10  9   8   7   6   5   4   3   2   - contagem regressiva de 11
77  0   45  32  56  24  20  20  0   10  = 284

11 - (237 % 11) = 5 (Primeiro digito) se for > 9 passa a ser 0
11 - (284 % 11) = 2 (Segundo digito) se for > 9 passa a ser 0
*/

/* 
    705.484.450-52      - Tem de ser uma string
*/

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
console.log(cpfLimpo)

// string para array

let cpfArray = Array.from(cpfLimpo)
console.log(cpfArray)

cpfArray.reduce((ac,val) => ac + Number(val), 0);

