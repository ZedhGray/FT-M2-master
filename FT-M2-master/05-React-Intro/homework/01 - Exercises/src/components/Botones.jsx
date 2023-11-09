import React from 'react'

class Botones extends React.Component {
  render() {
    const {
      alerts: { m1, m2 },
    } = this.props
    return (
      <div className="Botones">
        <button className='btn' onClick={() => alert(m1)}>Módulo 1</button>
        <button className='btn' onClick={() => alert(m2)}>Módulo 2</button>
      </div>
    )
  }
}

export default Botones

/*
import React from 'react'

export default function Botones({ alerts: { m1, m2 } }) {
  return (
    <div className="Botones">
      <button onClick={() => alert(m1)}>Módulo 1</button>
      <button onClick={() => alert(m2)}>Módulo 2</button>
    </div>
  )
}
*/
