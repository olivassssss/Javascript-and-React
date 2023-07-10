
function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
    
        return data.toLocaleTimeString('pt-PR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    
    function iniciarRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000)
    }
    
    document.addEventListener('click', function(e){
        const el = e.target;
        
        if(el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciarRelogio();
        }
    
        if(el.classList.contains('reiniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    
        if(el.classList.contains('pausar')) {
            if(segundos === 0) {
                relogio.classList.remove('pausado');
            } 
            else {
                relogio.classList.add('pausado');
                clearInterval(timer);
            }
        }
    })
}

relogio();




