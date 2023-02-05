import Component from '../Component/Component.js';
import Header from '../Header/Header.js';
import Title from '../Title/Title.js';
import Pagination from '../Pagination/Pagination.js';
import CardList from '../Card-List/Card-List.js';
import { pokemonsList } from '../../data/data.js';

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
      new Pagination(this.domElement),
      new CardList(this.domElement, pokemonsList),
      new Pagination(this.domElement),
    ];
  }

  render(): void {
    super.render();
    this.#childrens.forEach((children) => children.render());
  }
}
