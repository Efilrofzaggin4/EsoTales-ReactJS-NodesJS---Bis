import React from 'react'
import BeginnerItem from '../components/guides/BeginnerItem'
import { BeginnerList } from '../components/guides/GuidesList'

function Guides() {
  return (
    <div className='guides'>
      <h1>Guides</h1>
      <div className='beginnerList'>
        <h2>Beginner guides</h2>
        {BeginnerList.map((bGuides, idx) =>{
          return <BeginnerItem id={idx} name={bGuides.name}  />
        })}
      </div>
    </div>
  )
}

export default Guides