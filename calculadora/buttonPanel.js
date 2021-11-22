class ButtonPanel {

    buttonElements = [];
    htmlElement;

    constructor(buttons, onButtonPress) {
        
        this.buttonElements = buttons.map(
            textButton => new Button(textButton,(button) => onButtonPress(button))
        )

        this.render();
    }


    render() {
        this.htmlElement = document.createElement('div');
        this.buttonElements.map((buttonElement) => this.htmlElement.append(buttonElement.htmlElement))
    }
}