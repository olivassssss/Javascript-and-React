// polimorfismo

//Superclasse
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`saldo insuficiente: ${this.saldo}`)
    }

    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta}: Saldo: €${this.saldo.toFixed(2)}`);
}

const conta1 = new Conta('Santander', 11223344, 250)

// console.log(conta1.verSaldo())

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype)
CC.prototype.contructor = CC;

CC.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`saldo insuficiente: ${this.saldo}`)
    }

    this.saldo -= valor;
    this.verSaldo();
}

const cc = new CC('Santander', 11223344, 0, 100)
cc.depositar(10)
cc.sacar(110)
cc.sacar(1)
