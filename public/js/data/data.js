export const pokemonsList = [];
export const getPokemonList = (offset) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        .then((response) => response.json())
        .then((data) => {
        let dataResults = data.results;
        let pokemonUrlList = [];
        for (let i = 0; i < dataResults.length; i++) {
            pokemonUrlList.push(data.results[i].url);
        }
        for (let url of pokemonUrlList) {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                pokemonsList.push(data);
                pokemonsList.sort((a, b) => a.id - b.id);
            })
                .catch((err) => console.error(err));
        }
    })
        .catch((err) => console.error(err));
};
