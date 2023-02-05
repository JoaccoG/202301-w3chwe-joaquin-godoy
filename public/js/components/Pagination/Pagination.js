import Component from '../Component/Component.js';
export default class Pagination extends Component {
    constructor(parentElement) {
        super(parentElement, 'pag__container', 'div');
        this.leftArrow = document.createElement('div');
        this.rightArrow = document.createElement('div');
    }
    render() {
        super.render();
        this.generatePagination(this.leftArrow, 'left');
        this.generatePagination(this.rightArrow, 'right');
    }
    generatePagination(arrow, direction) {
        arrow.innerHTML = `
        <i class="fa-solid fa-angle-${direction}"></i>
    `;
        arrow.className = `pag-container__${direction}`;
        this.domElement.appendChild(arrow);
    }
}
