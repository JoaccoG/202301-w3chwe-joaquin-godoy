import Component from '../Component/Component.js';

export default class Pagination extends Component {
  #leftArrow: HTMLElement;
  #rightArrow: HTMLElement;

  constructor(parentElement: HTMLElement) {
    super(parentElement, 'pag__container', 'div');
    this.#leftArrow = document.createElement('div');
    this.#rightArrow = document.createElement('div');
  }

  render(): void {
    super.render();
    this.generatePagination(this.#leftArrow, 'left');
    this.generatePagination(this.#rightArrow, 'right');
    this.eventHandlers();
  }

  generatePagination(arrow: HTMLElement, direction: string): void {
    arrow.innerHTML = `
        <i class="fa-solid fa-angle-${direction}"></i>
    `;
    arrow.className = `pag-container__${direction}`;
    this.domElement.appendChild(arrow);
  }

  eventHandlers(): void {
    let main: HTMLElement | null = document.querySelector('.container');
    this.#leftArrow.addEventListener('click', () => {
      // if (this.#offset > 0) {
      //   this.#offset -= 20;
      //   getPokemonList(this.#offset).then(() => {
      //     pokemonsList.splice(-20, 20);
      //     this.#cardList.remove();
      //     if (main) {
      //       this.#cardList = new CardList(main, pokemonsList);
      //     }
      //     this.#cardList.render();
      //   });
      // } else {
      //   this.#offset = 0;
      // }
    });
    this.#rightArrow.addEventListener('click', () => {
      // if (this.#offset < 1000) {
      //   this.#offset += 20;
      //   getPokemonList(this.#offset).then(() => {
      //     pokemonsList.splice(0, 20);
      //     this.#cardList.remove();
      //     if (main) {
      //       this.#cardList = new CardList(main, pokemonsList);
      //     }
      //     this.#cardList.render();
      //   });
      // } else {
      //   this.#offset = 1000;
      // }
    });
  }
}
