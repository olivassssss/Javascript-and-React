// instanciar classes

class ControloRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        const MAX_VOLUME = 100;
        const MIN_VOLUME = 0

        if (this.volume <= MAX_VOLUME && this.volume >= MIN_VOLUME){
            //aqui vai o código para incrementar volume
            this.volume++
            console.log("Aumentou de " + this.volume);
            return true;
        } else {
            alert('O Volume já está no máximo!');
        }
    }

    diminuirVolume() {
        const MAX_VOLUME = 100;
        const MIN_VOLUME = 0

        if (this.volume <= MAX_VOLUME && this.volume >= MIN_VOLUME){
            //aqui vai o código para incrementar volume
            this.volume--
            console.log("Diminuiu de " + this.volume);
            return true;
        } else {
            alert('O Volume já está no minimo!');
        }
    }
}

const tv1 = new ControloRemoto('Samsung')
console.log(tv1)

tv1.aumentarVolume(50)
console.log(tv1)