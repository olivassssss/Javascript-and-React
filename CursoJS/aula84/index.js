// 705.484.450-52  070.987.720-03

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    éSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
        // const sequencias = ['11111111111','2']
    }

    geraNovoCPF() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.lenght + 1;

        for(let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
    }
    

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.lenght !== 11) return false;
        if(this.éSequencia()) return false;
        this.geraNovoCPF();
        
        return this.novoCPF === this.cpfLimpo;
    }
}

let validacpf = new ValidaCPF('070.987.720-03')
// console.log(validacpf.valida())

if (validacpf.valida()) {
    console.log('CPF VÁLIDO')
}
else {
    console.log('CPF INVÁLIDO')
}