import React from 'react'
import { useParams } from 'react-router-dom'
import { BeginnerList } from '../components/guides/GuidesList';

function BeginnerGuides() {
  const {id} = useParams();
  const bGuides = BeginnerList[id]

  return (
    <div className='guides'>
      <h1>{bGuides.name}</h1>
      <p className='part1'>{bGuides.part1}</p>
      <p className='part2'>{bGuides.part2}</p>
      <p className='part3'>{bGuides.part3}</p>
    </div>
  )
}

export default BeginnerGuides