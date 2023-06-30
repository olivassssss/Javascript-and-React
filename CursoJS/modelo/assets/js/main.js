
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Evento previnido')
    setResultado('Olá Mundo!');
});

function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = 'Qualquer coisa';
    resultado.appendChild(p);
};

// function imc() {

//     const peso = document.getElementById('peso');
//     const altura = document.getElementById('altura');

    
//     const conta = [];
    

//     conta.push({
//         kilogramas: peso.value,
//         metros: altura.value,
//     })

//     const imc = peso.value / (altura.value * altura.value);

//     if (imc < 18.5) {
//         resultado.innerHTML = 'Abaixo do peso';
//     }
//     else if (imc >= 18.5 && imc < 25) {
//         resultado.innerHTML = 'Peso normal'
//     }
//     else if (imc >= 25 && imc < 30) {
//         resultado.innerHTML = 'Sobrepeso'
//     }
//     else if (imc >= 30 && imc < 35) {
//         resultado.innerHTML = 'Obesidade Grau I'
//     }
//     else if (imc >= 35 && imc < 40) {
//         resultado.innerHTML = 'Obesidade Grau II'
//     }
//     else if (imc >= 40) {
//         resultado.innerHTML = 'Obesidade Grau III'
//     }
//     else {
//         resultado.innerHTML = 'Peso inválido, insira um peso válido'
//     }

// }

