
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}, 
];


const container = document.querySelector('.container');
const div = document.createElement('div');


for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];                          // destruturação
    let tagCriada = document.createElement(tag);                // criação do elemento pela tag indicada no array elementos

    tagCriada.innerHTML = texto;                                // escrever no HTML
    div.appendChild(tagCriada);                                 // criar um div para inserir os dados das novas tag criadas
}

container.appendChild(div);                                     // inserir no container já existente o conteudo da Div
                                                                // atribuir div como filha do container (appendChild())