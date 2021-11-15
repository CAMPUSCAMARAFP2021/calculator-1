class Coche{
    velocidad=0;
constructor(nombre,marca){
    this.nombre=nombre;
    this.marca=marca;
   
}
acelerar(){
return this.velocidad+=30
}
frenar(){
  return this.velocidad=0
}
toString(){
    return `datos del conductor: nombre ${this.nombre} marca:${marca} velocidad:${this.velocidad}`
}
}