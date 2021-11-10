const mayusculas = (...args) => {
    let operator, rangeMax, rangeMin;
    switch(args[args.length -1]){
        case 'upper': operator = -1; rangeMin = 97; rangeMax = 122; args.pop(); break;
        case 'lower': operator = 1; rangeMin = 65; rangeMax = 90; args.pop(); break;
        default: operator = 1; rangeMin = 65; rangeMax = 90; break;
    }
    return args.map(
        string => 
        string.split('').map(
             letter => 
             letter.charCodeAt(0) >= rangeMin && letter.charCodeAt(0) <= rangeMax ?  
             String.fromCharCode(letter.charCodeAt(0) + operator * 32) : 
             letter
        ).join('')
    )
}



console.log(
    mayusculas("Hola!","mundO fsdfg","pepe", "asas" ,"lower","upper")
);