export const rosterReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_POKEMON':
      if (state.length > 5)
        return state
      else
        return [action.payload, ...state]
    case 'REMOVE_POKEMON':
      return state.filter(pokemon => pokemon.id !== action.id)
    // MOVE CURRENT VIEW POKEMON HACK TO USE THIS
    case 'VIEW_POKEMON':
      return { pokemon: action.pokemon }
    default:
      return state;
  }
}
