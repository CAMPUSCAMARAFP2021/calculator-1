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
    switch(true){
        case nota < 5:
            resultado = 'Insuficiente'; break;
        case nota < 7:
            resultado = "Suficiente"; break;
        case nota < 8: 
            resultado = "Notable"; break;
        case nota < 10: 
            resultado = "Sobresaliente"; break; 
        default: resultado = "Error"; break;
    }
    return resultado;
}