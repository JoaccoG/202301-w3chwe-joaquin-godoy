import Component from '../Component/Component.js';

export default class Pagination extends Component {
  leftArrow: HTMLElement;
  rightArrow: HTMLElement;

  constructor(parentElement: HTMLElement) {
    super(parentElement, 'pag__container', 'div');
    this.leftArrow = document.createElement('div');
    this.rightArrow = document.createElement('div');
  }

  render(): void {
    super.render();
    this.generatePagination(this.leftArrow, 'left');
    this.generatePagination(this.rightArrow, 'right');
  }

  generatePagination(arrow: HTMLElement, direction: string): void {
    arrow.innerHTML = `
        <i class="fa-solid fa-angle-${direction}"></i>
    `;
    arrow.className = `pag-container__${direction}`;
    this.domElement.appendChild(arrow);
  }
}
