import { PokemonsList } from '../../types/types.js';
import Component from '../Component/Component.js';

export default class CardList extends Component {
  #cardListData: PokemonsList[];

  constructor(parentElement: HTMLElement, PokemonsList: PokemonsList[]) {
    super(parentElement, 'card__list', 'ul');
    this.#cardListData = PokemonsList;
  }

  render(): void {
    super.render();
  }
}
