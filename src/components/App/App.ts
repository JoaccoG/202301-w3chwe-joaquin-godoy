import Component from '../Component/Component.js';
import Header from '../Header/Header.js';
import Title from '../Title/Title.js';
import CardList from '../Card-List/Card-List.js';
import { getPokemonList, pokemonsList } from '../../data/data.js';

getPokemonList(0);

export default class App extends Component {
  #childrens: Component[];

  constructor(parentElement: HTMLElement) {
    super(parentElement, 'container');
    this.#childrens = [
      new Header(
        document.body,
        ['./index.html', './pages/favorites.html'],
        ['Home', 'Favorites']
      ),
      new Title(this.domElement, './assets/pokemon-logo.svg', 'logo'),
      new CardList(this.domElement, pokemonsList),
    ];
  }

  render(): void {
    super.render();
    this.#childrens.forEach((children) => children.render());
    setTimeout(() => {
      this.#childrens[2].render();
    }, 500);
  }
}
