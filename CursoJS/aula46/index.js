// setInterval e setTimeout

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-PT', {
        hour12: false
    })
}

// function funcaoDoIntervalo() {
//     console.log(mostraHora())
// }

// setInterval(funcaoDoIntervalo, 1000)

//substituir por:

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000)

setTimeout(function() {
    clearInterval(timer); //para parar o intervalo apos x segundos (x
}, 5000)


setTimeout(() => {
    console.log('olá mundo')
}, 5000);