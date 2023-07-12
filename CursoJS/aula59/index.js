// factory function

function Calculadora() {

    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    this.clearDisplay = () => {
        this.display.value = '';
    }

    this.deleteUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.inicia = () => {
        console.log('iniciou');
        this.clique();
        this.pressionaEnter();
    }

    // pressionaEnter() {
    //     this.display.addEventListener('keyup', e => {
    //         if (keyCode == 13) {
    //             this.realizaConta()
    //         };
    //     })
    // },

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if(conta === 0) {
                this.display.value = String(conta)
                return;
            }
            if(!conta) {
                alert('Conta inválida');
                return;
            }
            this.display.value = String(conta)
        } catch (e) {
            alert('conta inválida');
            return;
        }
    }

    this.clique = () => {
        // this -> calculadora
        document.addEventListener('click', (e) => {
            const el = e.target;

            // this -> documento
            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if(el.classList.contains('btn-del')) {
                this.deleteUm();
            }

            if(el.classList.contains('btn-eq')) {
                this.realizaConta();
            }

        });
    }

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    }
}

const calculadora = new Calculadora();
calculadora.inicia();