const isPrime = (num) => {
    for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
    return num > 1;
}

let nombre = prompt("Hola, ¿puedes decirme tu nombre?");
let num = parseInt(prompt("Ahora dime un número para saber si es un número primo"));

    
document.write(`Hola ${nombre}, el número que has introducido, 
<b class="${isPrime(num) ? 'rojo' : 'azul'}">${num}</b> 
${isPrime(num) ? 'si' : 'no'} 
es primo`);

