// escrever uma função chamada ePaisagem que receba 2 argumentos, largura e altura
// Retorna true se a imagem estiver em modo paisagem
// paisagem é na horizontal  width > height
// retrato é na vertical height > width

function ePaisagem(largura, altura) {
    let imagemRecebida = document.querySelector('.imagem-recebida');
    const imagemRecebidaAtributos = getComputedStyle(imagemRecebida);
    
    const larguraImg = imagemRecebidaAtributos.width
    const alturaImg = imagemRecebidaAtributos.height

    if (larguraImg > alturaImg) {
        return true
    } 
    else if (alturaImg > larguraImg) {
        return false
    }
    else {
        console.error('Erro: Imagem não tem dimensões válidas')
    }

}

// simplificado no node.js

function ePaisagem2(largura, altura) {
    return largura > altura;
}

console.log(ePaisagem2(1920, 1080))

// simplificado no node.js com arrow function

const ePaisagem3 = (largura, altura) => 
    largura > altura;

    console.log(ePaisagem3(1920, 1080))

