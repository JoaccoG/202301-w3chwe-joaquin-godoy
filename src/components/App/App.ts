import Component from '../Component/Component.js';
import Header from '../Header/Header.js';
import Title from '../Title/Title.js';
import Pagination from '../Pagination/Pagination.js';
import CardList from '../Card-List/Card-List.js';
import { pokemonsList } from '../../data/data.js';

export default class App extends Component {
  #children: Component[];

  constructor(parentElement: HTMLElement) {
    super(parentElement, 'container');
    this.#children = [
      new Header(
        document.body,
        ['./index.html', './favorites.html'],
        ['Home', 'Favorites']
      ),
      new Title(this.domElement, './assets/pokemon-logo.svg', 'logo'),
      new Pagination(this.domElement),
      new CardList(this.domElement, pokemonsList),
    ];
  }

  render(): void {
    super.render();
    this.#children.forEach((children) => {
      children.render();
      if (children instanceof Pagination) {
        children.leftArrow.addEventListener('click', () => {
          console.log('left');
        });
        children.rightArrow.addEventListener('click', () => {
          console.log('right');
        });
      }
    });
  }
}
