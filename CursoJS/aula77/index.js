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

let cpfLimpo = cpf.replace(/\D+/g, '');
console.log(cpfLimpo)

// string para array

cpfArray.reduce((ac,val) => ac + Number(val), 0);

(function ValidaCpf(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
})

ValidaCpf.prototype.valida() = function() {
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    // if(typeof cpfLimpo === ' number')    

    return true;
}

ValidaCpf.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial)
}

const cpf = new ValidaCpf('705.484.450-52');
cpf.valida();
