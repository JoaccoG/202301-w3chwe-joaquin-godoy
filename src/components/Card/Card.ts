import Component from '../Component/Component.js';
import { PokemonsList } from '../../types/types.js';

export default class Card extends Component {
  #cardData: PokemonsList;

  constructor(parentElement: HTMLElement, cardData: PokemonsList) {
    super(parentElement, 'card', 'article');
    this.#cardData = cardData;
  }

  render(): void {
    super.render();

    let types = '';
    for (let i = 0; i < this.#cardData.types.length; i++) {
      types = `
        <img
          src="./assets/pokemon-types/${
            (this, this.#cardData.types[i].type.name)
          }"
          alt="${this.#cardData.name}"
        >
      `;
    }

    this.domElement.innerHTML += `
      <div class="card-sprite__container">
        <img
          class="card__sprite"
          src=${
            this.#cardData.sprites.versions['generation-v']['black-white']
              .animated.front_default
          } alt="${this.#cardData.name}"
        >
      </div>
      <p class="card__id">N° ${this.#cardData.id}/151</p>
      <h3 class="card__name">${this.#cardData.name}</h3>
      <div class="card__info-size">
        <p>weight: <span>${this.#cardData.weight}</span></p>
        |
        <p>height: <span>${this.#cardData.height}</span></p>
      </div>
      <div class="card__info-type">
        ${types}
      </div>
    `;
  }
}
