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
        return this.cpfLimpo.charAt(0);
        // const sequencias = ['11111111111','2']
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.lenght !== 11) return false;
        return 'cheguei aqui';
    }
}

const validacpf = new ValidaCPF('070.987.720-03')
console.log(validacpf.valida())