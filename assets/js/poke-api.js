const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon()
  pokemon.number = pokeDetail.id
  pokemon.name = pokeDetail.name

  const types = pokeDetail.types.map(typeSlot => typeSlot.type.name)
  const [type] = types

  pokemon.types = types
  pokemon.type = type

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

  return pokemon
}

pokeApi.getPokemonDetail = pokemon => {
  return fetch(pokemon.url)
    .then(response => response.json())
    .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

  return fetch(url)
    .then(response => response.json())
    .then(jsonBody => jsonBody.results)
    .then(pokemons => pokemons.map(pokeApi.getPokemonDetail))
    .then(detailRequests => Promise.all(detailRequests))
    .then(pokemonsDetails => pokemonsDetails)
}

// Aqui iremos pegar os detalhes do pokemon diretamente da API, para exibir em um modal, que mostrara os detalhes do pokemon
// Nova função para obter detalhes de um Pokémon específico pelo nome
pokeApi.getPokemonDetailsByName = name => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => response.json())
    .then(pokemon => {
      console.log('Pokemon details fetched:', pokemon) // Log para depuração
      return {
        name: pokemon.name,
        number: pokemon.id,
        photo: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types.map(typeInfo => typeInfo.type.name),
        height: pokemon.height,
        weight: pokemon.weight
      }
    })
}
