const verdadeira = true;

// Let tem escopo de loco {.... Bloco}
// var só tem escopo de função

// let nome = 'Luiz'
// var nome2 = 'Luiz'

// if (verdadeira) {
//     let nome = 'Otávio' //criada
//     var nome2 = 'cenas' //redeclarada
//     if (verdadeira) {
//         let nome = 'Outra coisa'; //criada
//         var nome2 = 'coisas' //redeclarada
//     }
// }
// console.log(nome, nome2);  //var é sempre a ultima redeclarada, Let é a que está declarada no escopo


function dizOla() {
    var sobrenome = 'Oliveira'

    if (verdadeira) {
        let nome = 'Diogo'
    }
}

console.log(sobrenome, nome) // como está declarada dentro da função não encontra e dá erro
