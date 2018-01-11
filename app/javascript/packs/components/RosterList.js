import React from 'react'
import RosterPick from './RosterPick'

const RosterList = ({ rosterData }) => (
  <div className='row'>
    { rosterData.map(roster => <RosterPick key={roster.id} roster={roster} /> )}
  </div>
)

export default RosterList
