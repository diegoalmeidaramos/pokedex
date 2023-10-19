
const pokeApi = {}
function converterPokeApiDetalhesParaPokemon (pokeDetalhes){
    const pokemon = new Pokemon()
    pokemon.nome = pokeDetalhes.name;
    pokemon.numero = pokeDetalhes.id;

    const types = pokeDetalhes.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.foto = pokeDetalhes.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetalhes = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(converterPokeApiDetalhesParaPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => { 
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetalhes)) 
    .then ((detalhesRequisicao) => Promise.all(detalhesRequisicao))
    .then ((pokemonDetalhes) => pokemonDetalhes)
}