var estoyAprobado = (nota) => {
    var resultado;
    if(nota < 5) {
        resultado = 'Insuficiente';
    } else if (nota < 7) {
        resultado = 'Suficiente';
    } else if (nota < 9) {
        resultado = 'Notable';
    } else {
        resultado = 'Sobresaliente';
    }
    return resultado;
}


var estoyAprobadoConSwitch = (nota) => {
    var resultado ="";

    return resultado;
}