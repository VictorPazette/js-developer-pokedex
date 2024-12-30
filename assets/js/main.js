const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0

function convertPokemonToLi(pokemon) {
  return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types
                      .map(type => `<li class="type ${type}">${type}</li>`)
                      .join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML += newHtml
  })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
  offset += limit
  const qtdRecordsWithNexPage = offset + limit

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset
    loadPokemonItens(offset, newLimit)

    loadMoreButton.parentElement.removeChild(loadMoreButton)
  } else {
    loadPokemonItens(offset, limit)
  }
})

// Aplicação de um modal para exibir detalhes do pokémon
const modal = document.getElementById('pokemonModal')
const span = document.getElementsByClassName('close')[0]
const modalDetails = document.getElementById('modalDetails')

// Garantir que o modal comece escondido
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('pokemonModal').style.display = 'none'
})

// // Função para exibir o modal
function showModal(pokemon) {
  console.log('Pokemon recebido pelo modal:', pokemon) // Log para depuração

  const cardTop = document.querySelector('.card-top')
  // Remode todas as classes de tipo anteriores
  cardTop.className = 'card-top' // Limpa todas as classes
  // Adiciona a classe do tipo principal do pokemon
  const mainType = pokemon.types[0] // Considere o primeiro tipo como principal
  cardTop.classList.add(mainType)

  // Atualiza o conteúdo do modal com os detalhes do pokémon
  document.getElementById('pokemonImage').src = pokemon.photo
  document.getElementById('pokemonName').textContent = pokemon.name
  document.getElementById('pokemonNumber').textContent = `#${pokemon.number}`
  document.getElementById(
    'pokemonTypes'
  ).textContent = `Tipo(s): ${pokemon.types.join(', ')}`
  document.getElementById('pokemonHeight').textContent = `Altura: ${
    pokemon.height / 10
  } m`
  document.getElementById('pokemonWeight').textContent = `Peso: ${
    pokemon.weight / 10
  } kg`
  document.getElementById('pokemonModal').style.display = 'flex'
}

// Fechar modal pelo botão X
span.onclick = function () {
  modal.style.display = 'none'
}

// Esconde o modal clicando fora da área do conteúdo
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

// Quando clicar em um pokémon, exibe o modal com os detalhes
pokemonList.addEventListener('click', event => {
  const pokemonItem = event.target.closest('li.pokemon')
  if (pokemonItem) {
    const pokemonName = pokemonItem.querySelector('.name').textContent
    console.log('Pokemon clicked:', pokemonName) // Log para depuração
    pokeApi.getPokemonDetailsByName(pokemonName).then(pokemon => {
      showModal(pokemon)
    })
  }
})
