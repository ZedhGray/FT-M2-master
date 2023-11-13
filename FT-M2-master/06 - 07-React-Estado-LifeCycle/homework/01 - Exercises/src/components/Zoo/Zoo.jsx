import React from 'react'
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals'
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species'
//import styledZoo from './Zoo.module.css'
import './Zoo.css'

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: [],
  })
  const handleInputChange = (event) => {
    setZoo({
      ...zoo,
      zooName: event.target.value,
    })
  }
  const handleSpecies = (specie) => {
    const filteredAnimals = zoo.allAnimals.filter(
      (animal) => animal.specie === specie
    )
    setZoo({
      ...zoo,
      animals: filteredAnimals,
    })
  }
  const handleAllSpecies = () => {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals,
    })
  }
  /*********************************************************** */

  React.useEffect(() => {
    // Definimos una función asíncrona dentro del hook useEffect
    const fetchData = async () => {
      try {
        // Hacemos una petición fetch al servidor
        const response = await fetch('http://localhost:3001/zoo')
        // Parseamos la respuesta a JSON
        const data = await response.json()
        // Actualizamos el estado zoo con los datos obtenidos
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        })
      } catch (error) {
        // Si ocurre un error, lo registramos en la consola
        console.log(error)
      }
    }
    // Llamamos a la función fetchData
    fetchData()
  }, [])

  return (
    <div className="divZoo">
      <label className='zooName' htmlFor="">Zoo Name:</label>
      <input className='zooInp' placeholder="Enter text here" type="text" value={zoo.zooName} onChange={handleInputChange} />
      <h1 className="title">{zoo.zooName}</h1>
      <Species
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
      />
      <Animals animals={zoo.animals} />
    </div>
  )
}
