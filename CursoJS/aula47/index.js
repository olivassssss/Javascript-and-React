
function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-PR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const reiniciar = document.querySelector('.reiniciar');
let segundos = 0;
let timer;

function iniciarRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
}

iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciarRelogio();
})

pausar.addEventListener('click', function(event){
    relogio.classList.add('pausado');
    clearInterval(timer);
})

reiniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
})





