import Component from '../Component/Component.js';
import Header from '../Header/Header.js';
import Title from '../Title/Title.js';
import Pagination from '../Pagination/Pagination.js';
import CardList from '../Card-List/Card-List.js';
import { getPokemonList, pokemonsList } from '../../data/data.js';

export default class App extends Component {
  #children: Component[];
  #cardList: CardList;
  #offset: number = 0;

  constructor(parentElement: HTMLElement) {
    super(parentElement, 'container');
    this.#cardList = new CardList(this.domElement, pokemonsList);
    this.#children = [
      new Header(
        document.body,
        ['./index.html', './pages/favorites.html'],
        ['Home', 'Favorites']
      ),
      new Title(this.domElement, './assets/pokemon-logo.svg', 'logo'),
      new Pagination(this.domElement),
      new CardList(this.domElement, pokemonsList),
    ];
  }

  render(): void {
    super.render();
    this.#children.forEach((children) => children.render());
  }

  getData() {
    return new Promise<void>((resolve, reject) => {
      getPokemonList(this.#offset)
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
