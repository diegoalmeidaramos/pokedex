
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;




function converterPokemonEmLiHtml (pokemon){
    return `
    <li class="pokemon" ${pokemon.type}>
    <span class="numero">${pokemon.numero}</span>
    <span class="nome">${pokemon.nome}</span>
    <div class="detalhes">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>

        <img src="${pokemon.foto}"
            alt="${pokemon.name}">
    </div>
</li>

    `
}

const pokemonLista = document.getElementById('pokemonLista')



pokeApi.getPokemons().then((pokemons = []) => {
    const novoHtml =  pokemons.map(converterPokemonEmLiHtml).join('')
        pokemonLista.innerHTML = novoHtml
        



        //const listaItens = []

    //for (let i = 0; i < pokemons.length; i++) {
      //  const pokemon = pokemons[i];
        //listaItens.push(converterPokemonEmLiHtml(pokemon))
       //}
    //pokemonLista.innerHTML += converterPokemonEmLiHtml(pokemon); // innerHTML é o html que ta dentro do elemento da lista.

//    console.log(listaItens);

})
.catch((error) => console.error(error)) //(catch) caso der erro 
 

