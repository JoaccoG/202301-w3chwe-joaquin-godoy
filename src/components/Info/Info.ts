import Component from '../Component/Component.js';
import { PokemonsList } from '../../types/types.js';

export default class Info extends Component {
  #pokemonData: PokemonsList;

  constructor(parentElement: HTMLElement, idOfPokemon: PokemonsList) {
    super(parentElement, 'info__container', 'div');
    this.#pokemonData = idOfPokemon;
  }

  render() {
    super.render();
    console.log(this.#pokemonData);
  }
}
