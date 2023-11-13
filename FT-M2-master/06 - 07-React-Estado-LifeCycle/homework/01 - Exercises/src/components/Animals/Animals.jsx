import React from 'react'
// import styledAnimals from './Animals.module.css'
import './Animals.css'

export default class Animals extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="animalContainer">
        {this.props.animals?.map((animal, i) => (
          <div className="animalCard" key={i}>
            <h5 className="animalTitle">{animal.name}</h5>
            <img
              className="animalImg"
              src={animal.image}
              alt={animal.name}
              width="300px"
            />

            <span className="animalTitle">{animal.specie}</span>
          </div>
        ))}
      </div>
    )
  }
}
