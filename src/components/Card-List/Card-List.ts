import { PokemonsList } from '../../types/types.js';
import Component from '../Component/Component.js';
import Card from '../Card/Card.js';

export default class CardList extends Component {
  #cardListData: PokemonsList[];

  constructor(parentElement: HTMLElement, PokemonsList: PokemonsList[]) {
    super(parentElement, 'card__list', 'ul');
    this.#cardListData = PokemonsList;
  }

  render(): void {
    super.render();

    for (let data of this.#cardListData) {
      let liElement: HTMLLIElement = document.createElement('li');
      liElement.className = 'card-list__item';
      new Card(liElement, data).render();
      this.domElement.appendChild(liElement);
    }
  }

  remove(): void {
    this.domElement.remove();
  }
}
