// return de funções - retorna um valor e termina a função

function soma(a, b) {
    return a + b;
} 

function soma2(a, b) {
    console.log(a + b)
} soma2(5, 2)

function criaMultiplicador(multiplicador) {
    return function(e) {
        return e * multiplicador
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log("Duplicando:",duplica(10)) // Duplica
console.log("Triplicando:",triplica(10)) // Triplicando
console.log("Quadriplicando:",quadriplica(10)) // Quadriplicando