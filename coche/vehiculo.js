class Vehiculo{
    velocidad=0
    constructor(marca,matricula,ruedas,puertas,ano){
        this.marca=marca;
        this.matricula=matricula;
        this.ruedas=ruedas;
        this.puertas=puertas;
        this.ano=ano;
    }
    correr(){
        this.velocidad+=10;
    }
    frenar(){
        this.velocidad=0;
    }
    aparcar(){
        this.frenar();
        return "aparacao!"
    }
}

class Coche extends Vehiculo{

    constructor(marca,matricula,ano){
        super(marca,matricula,ano);
        this.puertas=4;
        this.ruedas=4;
    }
}
class Moto extends Vehiculo{
    puertas=0;
    ruedas=2;
    caballete=false
    constructor(marca,matricula,ano){
        super(marca,matricula,this.puertas,this.ruedas,ano);

    }
    ponerCaballete(){this.caballete=true}
    aparcar(){
        this.frenar();
        this.ponerCaballete();
        return "aparca";
        
    }
}
class Patin extends Moto{
    voltios=12
    constructor(marca,ano){
        super(marca,"no tiene",ano,this.puertas,this.ruedas);

    }
}
class bicicleta extends Moto{
    
    constructor(marca,ano,tipo="carretera",){
        super(marca,"no tiene",ano,this.puertas,this.ruedas);
        this.tipo=tipo;
    }
}