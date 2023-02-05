import Component from '../Component/Component.js';

export default class Pagination extends Component {
  #leftArrow: HTMLElement | any;
  #rightArrow: HTMLElement | any;

  constructor(parentElement: HTMLElement) {
    super(parentElement, 'pag__container', 'div');
  }

  render(): void {
    super.render();

    this.#leftArrow = this.generatePagination('left');
    this.#rightArrow = this.generatePagination('right');
    this.eventHandlers();
  }

  generatePagination(direction: string): HTMLElement {
    let container: HTMLElement = document.createElement('div');
    container.className = `pag-container__${direction}`;
    let arrow: HTMLElement = document.createElement('i');
    arrow.className = `fa-solid fa-angle-${direction}`;
    container.appendChild(arrow);
    this.domElement.appendChild(container);
    return container;
  }

  eventHandlers(): void {
    this.#leftArrow.addEventListener('click', () => {
      console.log('previous');
    });
    this.#rightArrow.addEventListener('click', () => {
      console.log('next');
    });
  }
}
