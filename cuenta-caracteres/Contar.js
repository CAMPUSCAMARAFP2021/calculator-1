
var contador = cadena => {
    cadena = cadena
        .replace(/ /g, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .split("");
        
        return cadena.reduce((total, letra) => {

            if(el = total.find(counter => counter.letra === letra)){
                el.cantidad++;
            }else {
                total.push({letra: letra, cantidad: 1})
            }
            return total;
        }, [])
        
    }
const pintar = (variable) => {
    const elemento = document.getElementById('cadena')
    elemento.innerHTML = ""
    contador(variable).map(
        mostrar => elemento.innerHTML += (mostrar.letra+" : " + mostrar.cantidad+"<br>")
    )
}


