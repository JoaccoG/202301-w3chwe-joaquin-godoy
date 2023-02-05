class Component {
    constructor(parentElement, className = 'container', tag = 'main') {
        this.parentElement = parentElement;
        this.domElement = document.createElement(tag);
        this.domElement.className = className;
    }
    render() {
        this.parentElement.appendChild(this.domElement);
    }
}
export default Component;
