import { PokemonsList } from '../types/types.js';

export const pokemonsList: PokemonsList[] = [];

export const getPokemonList = (offset: number) => {
  return new Promise<void>((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=151`)
      .then((response) => response.json())
      .then((data) => {
        let dataResults: [] = data.results;
        let pokemonUrlList: string[] = [];
        for (let i = 0; i < dataResults.length; i++) {
          pokemonUrlList.push(data.results[i].url);
        }
        let promisesForUrls = pokemonUrlList.map((url) => {
          return fetch(url)
            .then((response) => response.json())
            .then((data) => {
              pokemonsList.push(data);
            });
        });
        Promise.all(promisesForUrls)
          .then(() => {
            pokemonsList.sort((a, b) => a.id - b.id);
            resolve();
          })
          .catch((err) => reject(err));
      })
      .catch((err) => reject(err));
  });
};
