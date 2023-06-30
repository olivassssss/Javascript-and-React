
function meuNavegador() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // possivel solução
    // form.onsubmit = function (evento){
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('Enviado');
    // };
    let contador = 1;
    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        console.log(nome.value, sobrenome.value, peso.value, altura.value)

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);

};

meuNavegador();