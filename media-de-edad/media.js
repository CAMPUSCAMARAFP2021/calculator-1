var alumns = [
    {nombre: "Jose", edad: 12}, 
    {nombre: "Laura", edad: 15}, 
    {nombre: "Luisa", edad: 17}
];

var reducer = (valorPrevio, alumn) => valorPrevio + alumn.edad;

var averageAge = alumns.reduce(reducer, 0) / alumns.length;