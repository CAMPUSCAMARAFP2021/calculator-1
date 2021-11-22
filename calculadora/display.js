class Display {
    content = 0;
    htmlElement;

    constructor() {
        this.render();
    } 

    set(content) {
        this.content = content;
        this.htmlElement.value = this.content;
    }

    render() {
        this.htmlElement = document.createElement('input');
    }

}