// try catch e finally para erros

// try é executado quando não há erros
// catch é executado quando há erros
// finally é sempre executado

try {
    console.log('Abri um ficheiro');
    console.log('Mexi em um ficheiro');
    console.log('Fechei');
} catch(e) {
    console.log('Tratar do erro');
} finally {
    console.log('Sou sempre executado');
}