import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { _ } from 'lodash'
import thunk from 'redux-thunk';

import App from './components/App'
import pokemonApp from './reducers'

const store = createStore(pokemonApp, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)