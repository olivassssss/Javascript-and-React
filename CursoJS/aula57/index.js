// factory function

function criaCalculadora() {

    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        clearDisplay() {
            this.display.value = '';
        },

        deleteUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        inicia() {
            console.log('iniciou');
            this.clique();
            this.pressionaEnter();
        },

        // pressionaEnter() {
        //     this.display.addEventListener('keyup', e => {
        //         if (keyCode == 13) {
        //             this.realizaConta()
        //         };
        //     })
        // },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta)
            } catch (e) {
                alert('conta inválida');
                return;
            }
        },

        clique() {
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
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();