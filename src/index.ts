import App from './components/App/App.js';
import Card from './components/Card/Card.js';
import { getPokemonList, pokemonsList } from './data/data.js';

const generateApp = new App(document.body);
generateApp.render();

getPokemonList(0);
setTimeout(() => {
  let a = new Card(document.body, pokemonsList[0]);
  a.render();
}, 500);
