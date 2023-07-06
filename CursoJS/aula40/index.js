// break e continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    
    if(numero === 2) {
        continue;                       // continua a ler o resto da função
    } 
    else if(numero === 6) {
        break;                          // sai o da função não mostra o que está a seguir
    }  
    else {
    console.log(numero);
    }
}