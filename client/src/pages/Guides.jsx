import React from 'react'
import BeginnerItem from '../components/guides/BeginnerItem'
import CombatItem from '../components/guides/CombatItem'
import { BeginnerList, CombatList } from '../components/guides/GuidesList'

function Guides() {
  return (
    <div className='guides'>
      <h1>Guides</h1>
      <div className='beginnerList'>
        <h2>ESO starter guide</h2>
        {BeginnerList.map((bGuides, idx) =>{
          return <BeginnerItem id={idx} name={bGuides.name}  />
        })}
      </div>
      <div className='combatList'>
        <h2>Eso Combat</h2>
        {CombatList.map((cGuides, idx) =>{
          return <CombatItem id={idx} name={cGuides.name}  />
        })}
      </div>
    </div>
  )
}

export default Guides