import React from 'react'
// import styledSpecies from "./Species.module.css";
import './Species.css'
export default function Species({ species, handleSpecies, handleAllSpecies }) {
  //console.log(species);
  return (
    <div className="speContainer">
      <h2 className='speTitle'>Species</h2>
      <aside className="speAside">
        {species.map((specie, i) => (
          <button className='speBtn' key={i} onClick={() => handleSpecies(specie)} value={specie}>
            {specie}
          </button>
        ))}
        <button className='speBtn' onClick={handleAllSpecies}>All Animals</button>
      </aside>
    </div>
  )
}
