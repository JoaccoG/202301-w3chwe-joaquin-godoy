import Component from '../Component/Component.js';
import Header from '../Header/Header.js';
import Title from '../Title/Title.js';

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
    ];
  }

  render(): void {
    super.render();
    this.#childrens.forEach((children) => children.render());
  }
}
