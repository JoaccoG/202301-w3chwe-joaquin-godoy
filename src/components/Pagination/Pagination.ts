import Component from '../Component/Component.js';
import { pokemonsList, getPokemonList } from '../../data/data.js';
import CardList from '../Card-List/Card-List.js';

export default class Pagination extends Component {
  #leftArrow: HTMLElement;
  #rightArrow: HTMLElement;
  #offset: number;
  #cardList: CardList;

  constructor(parentElement: HTMLElement, cardList: CardList) {
    super(parentElement, 'pag__container', 'div');
    this.#offset = 0;
    this.#cardList = cardList;
    this.#leftArrow = this.generatePagination('left');
    this.#rightArrow = this.generatePagination('right');
  }

  render(): void {
    super.render();
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
    let main: HTMLElement | null = document.querySelector('.container');
    this.#leftArrow.addEventListener('click', () => {
      this.#offset > 0 ? (this.#offset -= 20) : (this.#offset = 0);
      getPokemonList(this.#offset).then(() => {
        pokemonsList.splice(-20, 20);
        this.#cardList.remove();
        if (main) {
          this.#cardList = new CardList(main, pokemonsList);
        }
        this.#cardList.render();
      });
    });
    this.#rightArrow.addEventListener('click', () => {
      this.#offset < 1000 ? (this.#offset += 20) : (this.#offset = 1000);
      getPokemonList(this.#offset).then(() => {
        pokemonsList.splice(0, 20);
        this.#cardList.remove();
        if (main) {
          this.#cardList = new CardList(main, pokemonsList);
        }
        this.#cardList.render();
      });
    });
  }
}
