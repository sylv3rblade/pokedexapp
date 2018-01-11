import axios from "axios/index";

export const viewPokemon = (pokemon) => ({
  type: 'VIEW_POKEMON',
  pokemon
})

// export function addPokemon(pokemon) {
//   return dispatch => {
//     dispatch(addPokemonAsync(pokemon));
//   }
// }

// const addPokemonAsync = (pokemon) => ({
//   type: 'ADD_POKEMON',
//   id: pokemon.id,
//   payload: {
//     request: {
//       method: 'get', // or get
//       url: '/api/pokemons/' + pokemon.id
//     }
//   }
//})


function fetchPokemon(pokemon) {
  return fetch('/api/pokemons/' + pokemon.id)
}

export function addPokemon(pokemon) {

  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return function (dispatch) {

    return fetchPokemon(pokemon).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }).then((response) => response.json())
      .then((data) => {
        dispatch(addPokemonAsync({
          id: data.id,
          name: data.name,
          sprite: data.sprites.front_default
        }))
      })
  }
}

const addPokemonAsync = (pokemon) => ({
  type: 'ADD_POKEMON',
  id: pokemon.id,
  payload: pokemon
})

export function removePokemon(pokemon) {
  return dispatch => {
    dispatch(removePokemonAsync(pokemon));
  }
}

const removePokemonAsync = (id) => ({
  type: 'REMOVE_POKEMON',
  id: id
})
