// Escrever uma função que recebe um número e retorna o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número NÃO é divisivel por 3 e 5 = Retorna o próprio número
// Check se o número é realmente um número

// Usar a função com números de 0 a 100 


function fizzBuzz(num1) {
    const min = 1;
    const max = 100;

    const fizz = 'Fizz';
    const buzz = 'Buzz';
    const fizzBuzz = 'FizzBuzz'

    if (num1 >= min && num1 <= max){
        if (typeof num1 !== 'number'){ // verifica se é do tipo número
            return num1
        }
        else {
            if (((num1 % 5) === 0) && ((num1 % 3) === 0) && (min <= num1 <= max)) {
                return fizzBuzz 
            }
            else if (((num1 % 5) === 0) && (min <= num1 <= max)) {
                return buzz
            }
            else if (((num1 % 3) === 0) && (min <= num1 <= max)) {
                return fizz
            }
            else {
                return num1
            }
        }
    }  
    else {
        return 'Insira um numero entre 1 e 100'
    } 
}

console.log(fizzBuzz(50))