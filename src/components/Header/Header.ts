import Component from '../Component/Component.js';

export default class Header extends Component {
  #navbar: HTMLElement;
  #navbarMenu: HTMLUListElement;
  #liElement: HTMLLIElement;
  #anchorElement: HTMLAnchorElement;

  constructor(...url: string[]) {
    super(document.body, 'header', 'header');
    this.#navbar = document.createElement('nav');
    this.#navbarMenu = document.createElement('ul');
    this.#liElement = document.createElement('li');
    this.#anchorElement = document.createElement('a');
    url.forEach((href) => {
      this.createLink(this.#liElement, this.#anchorElement, href);
    });
  }

  render(): void {
    super.render();
    this.domElement.appendChild(this.#navbar);
    this.#navbar.appendChild(this.#navbarMenu);
  }

  createLink(li: HTMLLIElement, a: HTMLAnchorElement, url: string) {
    this.#navbarMenu.appendChild(li);
    li.appendChild(a);
    a.href = url;
  }
}
