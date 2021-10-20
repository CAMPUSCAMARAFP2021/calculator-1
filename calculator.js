// function pushButton(param) {
//     console.log('soy boton', param);
// }


var pushButton = (param) => {
    console.log('soy boton', param);
    document.getElementById('va').value += param;
}

var sumar = () => {
    var variable1 = document.getElementById('va').value;
    var variable2 = +document.getElementById('vb').value;
    document.getElementById('res').value =
    variable1 +
    variable2;
}

var restar = () => {
    var variable1 = document.getElementById('va').value;
    var variable2 = +document.getElementById('vb').value;
    document.getElementById('res').value =
    variable1 -
    variable2;
}

var multiplicar = () => {
    var variable1 = document.getElementById('va').value;
    var variable2 = +document.getElementById('vb').value;
    document.getElementById('res').value =
    variable1 *
    variable2;
}

var dividir = () => {
    var variable1 = document.getElementById('va').value;
    var variable2 = +document.getElementById('vb').value;
    document.getElementById('res').value =
    variable1 /
    variable2;
}