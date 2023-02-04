import Component from '../Component/Component.js';

export default class Title extends Component {
  #logo: HTMLImageElement;

  constructor(parentElement: HTMLElement, src: string, alt: string) {
    super(parentElement, 'main__title', 'div');
    this.#logo = document.createElement('img');
    this.#logo.src = src;
    this.#logo.alt = alt;
  }

  render(): void {
    super.render();
    this.domElement.appendChild(this.#logo);
  }
}

fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
