import Component from '../Component/Component.js';

export default class Header extends Component {
  #parentElement: HTMLElement;
  #navbar: HTMLElement;
  #navbarMenu: HTMLUListElement;

  constructor(parentElement: HTMLElement, href: string[], text: string[]) {
    super(parentElement, 'header', 'header');
    this.#parentElement = parentElement;
    this.#navbar = document.createElement('nav');
    this.#navbar.className = 'navbar';
    this.#navbarMenu = document.createElement('ul');
    this.#navbarMenu.className = 'navbar__menu';
    for (let i = 0; i < href.length; i++) {
      this.addLiElement(href[i], text[i]);
    }
  }

  render(): void {
    this.#parentElement.prepend(this.domElement);
    this.domElement.appendChild(this.#navbar);
    this.#navbar.appendChild(this.#navbarMenu);
  }

  addLiElement(href: string, text: string) {
    this.#navbarMenu.innerHTML += `
      <li>
        <a href="${href}">${text}</a>
      </li>
    `;
  }
}
