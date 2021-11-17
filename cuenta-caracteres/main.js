let contador = string => 
    string.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    }, {});


const fun = () => {}

var alumno1 = {
    fun,
    name: "luis",
    hablar: () => {}

}

alumno1.fun();