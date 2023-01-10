import React from 'react'
import PropTypes from 'prop-types'
import {Contact} from '../models/Contact'

function CompB({contact}) {
  
  return (
    <div>
      <h2>
            Nombre: {contact.name}
            </h2>
            <h3>
            Apellido: {contact.surname}
            </h3>
            <h4>
            email: {contact.email}
            </h4>
            <h5>
                Conexión: {contact.conected ? 'Contacto En Linea' : 'Contacto No Disponible'}
            </h5>
    </div>
  )
}

CompB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default CompB;

