/*
entre 0 - 11 - Bom dia
entre 12 e 19 - Boa Tarde
entre 20 - 24 - Boa noite
*/


const hora = 10;

if(hora >= 0 && hora < 12) {
    console.log('Bom dia!');
}
else if (hora >=12 && hora < 20) {
    console.log('Boa tarde')
}
else if (hora <= 24 && hora >=20) {
    console.log('Boa noite')
}
else {
    console.log('erro')
    return;
}
