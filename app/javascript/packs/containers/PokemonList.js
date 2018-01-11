import React from 'react'
import axios from "axios/index";
import ReactDOM from "react-dom";
import PokemonData from '../components/PokemonData'
import { addPokemon, removePokemon, viewPokemon} from "../actions"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class PokemonList extends React.Component {
  componentDidMount() {
    axios.get('/api/pokemons')
      .then(res => {
        const data = res.data;
        this.setState({ data });
      });
  }
  render() {
    let list
    if (this.state) {
      list = this.state.data.results.map(pokemon => <ConnectedPokemonListItem key={pokemon.id} pokemon={pokemon} />)
    }
    else {
      list = 'loading list'
    }
    return (
      <div>
        <div className='center-text'>
          <h5>Pokemon Search</h5>
        </div>
        <br />
        <ul className='pokemonList'>
          {list}
        </ul>
      </div>
    );
  }
}

class PokemonListItem extends React.Component{
  constructor(props){
    super(props)
    let pokemon = this.props.pokemon
    this.state = {
      id: pokemon.id,
      name: pokemon.name,
    }
    this.viewPokemonClick = this.viewPokemonClick.bind(this)
    this.addToRosterClick = this.addToRosterClick.bind(this);
  }
  viewPokemonClick(event){
    ReactDOM.render(
      <PokemonData id={this.state.id}/>,
      document.getElementById('dataview'),
    )
  }
  addToRosterClick(event){
    this.props.addPokemon(this.state)
  }
  componentDidMount(){ }
  render(){
    return(
      <li>
        {capitalize(this.state.name)}
        <a href="#" className="button button-primary" onClick={this.viewPokemonClick}>View</a>
        <a href="#" className="button button-primary" onClick={this.addToRosterClick}>Add to Roster</a>
      </li>
    )
  }
}

function capitalize(s)
{
  return s && s[0].toUpperCase() + s.slice(1);
}

//connects redux actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addPokemon: addPokemon,
    removePokemon: removePokemon,
    viewPokemon: viewPokemon
  }, dispatch);
}

const ConnectedPokemonListItem = connect(null, mapDispatchToProps)(PokemonListItem)

export default PokemonList
