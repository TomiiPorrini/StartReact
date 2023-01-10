import React, {useState} from 'react'
import PropTypes from 'prop-types'

function CompB(estado) {
  // const [state, setstate] = useState(initialState);
  const [conectado, setConectado] = useState(estado);

  return (
    <div>
        <h5>Conexión: {conectado ? 'Contacto En Linea' : 'Contacto No Disponible'}</h5>
        <button onClick={() => setConectado(!conectado)}>{conectado ? 'Cambiar a Desconectado' : 'Cambiar a Conectado'}</button>
    </div>
  )
}

CompB.propTypes = {
    estado: PropTypes.bool,
}

export default CompB;

