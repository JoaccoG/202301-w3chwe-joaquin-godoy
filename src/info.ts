import Header from './components/Header/Header.js';
import Title from './components/Title/Title.js';

window.addEventListener('DOMContentLoaded', () => {
  let main: HTMLElement = document.createElement('main');
  main.className = 'container';
  new Header(
    document.body,
    ['./index.html', './favorites.html'],
    ['Home', 'Favorites']
  ).render();
  new Title(main, './assets/pokemon-logo.svg', 'logo').render();
  document.body.appendChild(main);
});
