class Button {
    text;
    action;
    htmlElement;

    constructor(text, action) {
        if(typeof action != 'function') 
            throw new Error('action must be a function');
        this.action = action; // funcion
        this.text = text; // contenido del boton
        this.render();
    }

    render() {
       this.htmlElement = document.createElement('button');
       this.htmlElement.innerHTML = this.text;
       this.htmlElement.addEventListener('mousedown',() => this.htmlElement.c)
       this.htmlElement.addEventListener('click',() => this.action(this))
    }

}