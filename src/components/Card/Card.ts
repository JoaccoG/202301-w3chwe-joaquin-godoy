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
      <p class="card__id">${this.#getFormattedZeros()}</p>
      <h3 class="card__name">${this.#cardData.name}</h3>
      <div class="card__info-size">
        <p>weight: <span>${this.#getFormattedSizes(
          this.#cardData.weight
        )}kg</span></p>
        |
        <p>height: <span>${this.#getFormattedSizes(
          this.#cardData.height
        )}m</span></p>
      </div>
      <div class="card__info-type">
        ${this.#getPokemonTypes()}
      </div>
    `;
    this.#eventHandler();
  }

  #getPokemonTypes(): string {
    let types = '';
    for (let type of this.#cardData.types) {
      types += `
        <img
          src="./assets/pokemon-types/${type.type.name}.png"
          alt="${this.#cardData.name}"
        >
      `;
    }
    return types;
  }

  #getFormattedZeros(): string {
    let idToString: string = this.#cardData.id.toString();
    let numberOfZeros: number = 3 - idToString.length;
    return `N° ${
      numberOfZeros > 0 ? '0'.repeat(numberOfZeros) + idToString : idToString
    }`;
  }

  #getFormattedSizes(data: {}): string {
    let dataToString: string = data.toString();
    let dataLength: number = dataToString.length;
    if (dataLength === 1) {
      return `0.${dataToString}`;
    }
    return `${dataToString.slice(0, dataLength - 1)}.${dataToString.slice(
      dataLength - 1
    )}`;
  }

  #eventHandler() {
    this.domElement.addEventListener('click', () => {
      console.log('asd');
      console.log(this.#cardData.id);
    });
  }
}
