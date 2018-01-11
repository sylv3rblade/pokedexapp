import React from 'react'
import axios from "axios/index"

class PokemonData extends React.Component {
  componentDidMount() {
    axios.get('/api/pokemons/' + this.props.id)
      .then(res => {
        const data = res.data;
        this.setState({data});
      });
  }
  render(){
    if (this.state && this.state.data){
      let pokemonData = this.state.data
      let moveList = _.slice(_.map(_.flatten(_.map(pokemonData.moves, 'move')), 'name'), 0, 3).join(', ')
      let pokemonType = _.map(_.flatten(_.map(pokemonData.types, 'type')), 'name').join(', ')
      let abilityList = _.map(_.flatten(_.map(pokemonData.abilities, 'ability')), 'name').join(', ')
      return(
        <div>
          <div className='three columns'>
            <img src={pokemonData.sprites.front_default} />
          </div>
          <div className='nine columns'>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{pokemonData.name}</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>{pokemonData.height}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{pokemonData.weight}</td>
                </tr>
                <tr>
                  <td>Sample Moves</td>
                  <td>{moveList}</td>
                </tr>
                <tr>
                  <td>Abilities</td>
                  <td>{abilityList}</td>
                </tr>
                <tr>
                  <td>Pokemon Type</td>
                  <td>{pokemonType}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      )
    }
    else {
      return('loading')
    }
  }
}

export default PokemonData
