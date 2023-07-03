
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Evento previnido')
    setResultado('Olá Mundo!');
});

function setResultado() {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = 'Qualquer coisa';
    resultado.appendChild(p);

    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    
    const conta = [];

    conta.push({
        kilogramas: peso.value,
        metros: altura.value,
    })

    const imc = peso.value / (altura.value * altura.value);
    const pesoIdeal = 22;

    if (peso.value >= 20 && peso.value <= 500) {
        if (altura.value >= 1.00 && altura.value <= 2.50) {
            if (imc < 18.5) {
                resultado.classList.add('resultado-amarelo');
                resultado.innerHTML = `Abaixo do peso.<br>O seu peso ideal será de ${pesoIdeal * (altura.value * altura.value)}kg.`;
            }
            else if (imc >= 18.5 && imc < 25) {
                resultado.classList.add('resultado-verde');
                resultado.innerHTML = `Peso normal.`
            }
            else if (imc >= 25 && imc < 30) {
                resultado.classList.add('resultado-laranja');
                resultado.innerHTML = `Sobrepeso.<br>O seu peso ideal será de ${pesoIdeal * (altura.value * altura.value)}kg.`
            }
            else if (imc >= 30 && imc < 35) {
                resultado.classList.add('resultado-verm1');
                resultado.innerHTML = `Obesidade Grau I.<br>O seu peso ideal será de ${pesoIdeal * (altura.value * altura.value)}kg.`
            }
            else if (imc >= 35 && imc < 40) {
                resultado.classList.add('resultado-verm2');
                resultado.innerHTML = `Obesidade Grau II.<br>O seu peso ideal será de ${pesoIdeal * (altura.value * altura.value)}kg.`
            }
            else if (imc >= 40) {
                resultado.classList.add('resultado-verm3');
                resultado.innerHTML = `Obesidade Grau III <br>O seu peso ideal será de ${pesoIdeal * (altura.value * altura.value)}kg.`
            }
            else {
                resultado.classList.add('erro');
                resultado.innerHTML = 'Peso inválido, insira um peso válido'
            }
        }
        else {
            resultado.innerHTML = 'Altura Inválida, insira uma altura válida';
        }
    } 
    else {
        resultado.innerHTML = 'Peso inválido, insira um peso válido'
    }  
};
