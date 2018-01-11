import { combineReducers } from 'redux'
import { rosterReducer } from './pokemon'

const pokemonApp = combineReducers({
  rosterData: rosterReducer
})

export default pokemonApp
