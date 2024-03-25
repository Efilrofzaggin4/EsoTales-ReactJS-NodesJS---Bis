import React from 'react'
import { useNavigate } from 'react-router-dom'

function CombatItem({name, id}) {
    const navigate = useNavigate();
    return (
      <div className='combatItem' 
        onClick={() => {
          navigate("/guides/combat/" + id)
      }}>
          <h2>{name}</h2>
      </div>
    )
}

export default CombatItem