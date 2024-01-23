import React from 'react'
import { useParams } from 'react-router-dom'
import {ClassesList} from '../components/classes/ClassesList'
import "./DisplayClasses.css"

function DisplayClasses() {

  const {id} = useParams();
  const classe = ClassesList[id]

  return (
    <div>
      <h1>{classe.name}</h1>
      <img src={classe.image} alt="sorcerer" />
      <div>{classe.stamina}</div>
      <div>{classe.magicka}</div>
    </div>
  )
}

export default DisplayClasses