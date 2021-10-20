let edad = prompt('¿Cuál es tu edad?');
let acompanado = prompt('¿Estas acompañado?');
let carnet = prompt('Tienes carnet de conducir?');

let eresAdulto = edad >= 18;
let estasAcompanado = acompanado === 'SI';
let tienesCarnet = carnet === 'SI';









if( eresAdulto || estasAcompanado) {
    console.log('Puedes Entrar');
} else {    
    console.log('Debes ser Mayor de Edad o estar Acompañado');
}


if (eresAdulto && estasAcompanado) {
    console.log('Puedes condicir');
} else {
    console.log('No puedes conducir');
}