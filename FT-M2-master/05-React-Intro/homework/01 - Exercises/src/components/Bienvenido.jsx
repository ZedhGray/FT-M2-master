import React from 'react'
import Botones from './Botones'

const studentName = 'Eduardo Hernandez'
const techSkills = ['Html', 'Css', 'JavaScript', 'React', 'Redux']
const alerts = { m1: 'Aprobado', m2: 'En curso' }

export default function Bienvenido() {
  // el código de tu componente acá
  return (
    <div className="card">
      <h1 className="title">Mi primera chamba</h1>
      <h3 className="subtitle">{studentName}</h3>
      <ul>
        {techSkills.map((e, i) => {
          return <li key={i}>{e}</li>
        })}
      </ul>
      <Botones alerts={alerts} />
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts }
