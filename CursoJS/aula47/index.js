
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const reiniciar = document.querySelector('.reiniciar');

iniciar.addEventListener('click', function(e){
    relogio.innerHTML = iniciarTimer();
})

pausar.addEventListener('click', function(e){
    alert('cliquei em pausar')
})

reiniciar.addEventListener('click', function(e){
    alert('cliquei em reiniciar')
})


function iniciarTimer() {
    let data = new Date(0);

    return data.toLocaleTimeString('pt-PT', {
        hour12: false
    })
}

const timer = setInterval(function () {
    iniciarTimer();
}, 1000)


