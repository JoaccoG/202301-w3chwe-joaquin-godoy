import App from './components/App/App.js';
import { getPokemonList } from './data/data.js';

getPokemonList(0).then(() => {
  new App(document.body).render();
});
