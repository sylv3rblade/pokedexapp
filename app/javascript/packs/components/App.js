import React from 'react'
import PokemonList from '../containers/PokemonList'
import RosterList from '../components/RosterList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addPokemon, removePokemon, viewPokemon } from '../actions'

class App extends React.Component {
 constructor(props) {
   super(props)
   // debugger
   // this.state = {
   //   rosterData: []
   // }
 }
 componentDidMount(){
   //this.props.rosterData = []
 }
 render(){
   return(
     <div className='container'>
       <div className='seven columns'>
         <div className='row main-content'>
           <div className='center-text'>
             <h5>Pokemon Lineup</h5>
           </div>
           <RosterList rosterData={this.props.rosterData}/>
         </div>
         <div className='row main-content'>
           <div className='center-text'> <h5>Pokemon Data</h5> </div>
           <div id='dataview' />
         </div>

       </div>
       <div className='five columns'>
         <PokemonList />
       </div>
     </div>
   )
 }
}

function mapStateToProps(state) {
  return {
    rosterData: state.rosterData
  }
}

export default connect(mapStateToProps, null)(App)
