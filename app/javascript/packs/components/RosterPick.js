import React from 'react'
import ReactDOM from "react-dom";
import PokemonData from '../components/PokemonData'
import { removePokemon, viewPokemon } from "../actions";
import { bindActionCreators } from "redux";
import {connect} from "react-redux";

class RosterPick extends React.Component{
  constructor(props){
    super(props)
    this.viewPokemonClick = this.viewPokemonClick.bind(this)
    this.removePokemonClick = this.removePokemonClick.bind(this)
  }
  viewPokemonClick(){
    ReactDOM.render(
      <PokemonData id={this.props.roster.id}/>,
      document.getElementById('dataview'),
    )
  }
  removePokemonClick(){
    this.props.removePokemon(this.props.roster.id)
  }
  render(){
    return(
      <div className='roster four columns'>
        <div className='row'>
          <img className='rosterSprite' src={this.props.roster.sprite} />
        </div>
        <div className='center-text'>{capitalize(this.props.roster.name)}</div>
        <div className='center-text'>
          <a className='button button-primary' href='#' onClick={this.viewPokemonClick}>View</a>
          <a className='button button-primary' href='#' onClick={this.removePokemonClick}>Remove</a>
        </div>
      </div>
    )
  }
}

//connects redux actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    removePokemon: removePokemon,
    viewPokemon: viewPokemon
  }, dispatch);
}

function capitalize(s)
{
  return s && s[0].toUpperCase() + s.slice(1);
}

export default connect(null, mapDispatchToProps)(RosterPick)
