

let num1 = prompt('Digite um numero: ')
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

num1 = Number(num1)

numeroTitulo.innerHTML = `${num1} <br>`
texto.innerHTML += `Raiz quadrada: ${num1 ** 0.5}<br>`
texto.innerHTML += `${num1} é inteiro? ${Number.isInteger(num1)}<br>`
texto.innerHTML += `É NaN: ${Number.isNaN(num1)}<br>`
texto.innerHTML += `Arredondado para baixo: ${Math.floor(num1)}<br>`
texto.innerHTML += `Arredondado para cima: ${Math.ceil(num1)}<br>`
texto.innerHTML += `Com 2 casa decimais: ${num1.toFixed(2)}<br>`