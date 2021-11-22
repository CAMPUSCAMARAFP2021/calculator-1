class Calculator {

    htmlElement;
    display;
    operationsPanel;
    numberPanel;

    // propiedades que varian con el funcionamiento de la calculadora, el conjunto de ellas se llama "ESTADO"
    state;
    accumulator;
    operation;

    constructor() {
        // al crear una calculadora nueva, construyo sus componentes.
        this.display = new Display();
        this.operationsPanel = new ButtonPanel(['+','-','*','='], this.operationPressed.bind(this));
        this.numberPanel = new ButtonPanel(['1','2','3','4','5','6','7','8','9','0'], (number) => this.numberPressed(number));
        // el metodo render permitirá tener en la propiedad htmlElement de calculadora un objeto de dom que representa la calculadora.
        this.render();
        // al encender la calculadora se resetea.
        this.reset();
    }

    // metodo que resetea la calculadora
    reset() {
        this.setState(0);
        this.operation = null;
        this.accumulator = 0;
    }

    // set state es el metodo encargado de controlar el estado de la calculadora.
    
    setState(state) {
        state *=1; // me aseguro de convertirlo a numero.
        this.state = state;  // defino el valor del estado
        this.display.set(state);  // doy la orden al display de mostrar en nuevo valor del estado
    }

    // lo que pasa cuando se pulsa un numero
    numberPressed(number) {
        this.setState(this.state + number.text);
    }

    // lo que pasa cuando se pulsa una operacion
    operationPressed(operation) {  

        // si hay operacion anterior efectuo calculo de acumulador con estado      
        if(this.operation) { this.calc(); }

        // defino la operacion pulsada como operacion en arrastre.
        this.operation = operation.text;

        console.log('se ha pulsado la operacion', operation);
    }

    calc() {
        switch(this.operation) {
            case '=':  this.setState(this.accumulator); 
                       this.accumulator = 0; break;
            case '+':  this.accumulator += this.accumulator; 
                       this.setState(0); break;
            
            default: this.setState(0);
        }
    }


    render() {
        this.htmlElement = document.createElement('div');
        this.htmlElement.append(this.display.htmlElement);
        this.htmlElement.append(this.numberPanel.htmlElement);
        this.htmlElement.append(this.operationsPanel.htmlElement);
    }
}