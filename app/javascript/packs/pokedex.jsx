import React from 'react'
import ReactDOM from 'react-dom'

const Wrapper = props => {
  return (
    <div>
      <div>
        <PokemonLineUp />
        <PokemonData />
      </div>
      <div>
        <PokemonSearch />
      </div>
    </div>
  )
}

const PokemonLineUp = props => (
  <div>
    Pokemon Lineup <br />
    List them here
  </div>
)

const PokemonSearch = props => (
  <div>
    Pokemon Search
    <br />
    Search able data here
  </div>
)

const PokemonData = props => (
  <div>
    Pokemon Data
    <br />
    Display Data here
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Wrapper />,
    document.body.appendChild(document.createElement('div')),
  )
})
