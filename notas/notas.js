var estoyAprobado = (nota) => {
    if(nota < 5) {
        return 'Insuficiente';
    } else if (nota < 7) {
        return 'Suficiente';
    } else if (nota < 9) {
        return 'Notable';
    } else {
        return 'Sobresaliente';
    }
}
