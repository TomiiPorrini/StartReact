import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/Contact'
import CompB from './CompB'

const CompA = ({contact}) => {
  console.log(contact)
  return (
    <div>
        <div>
            <h2>Nombre: {contact.name}</h2>
            <h3>Apellido: {contact.surname}</h3>
            <h4>email: {contact.email}</h4>
            <CompB estado={true}></CompB>
        </div>
    </div>
    
  )
}

CompA.propTypes = {
  contact: PropTypes.instanceOf(Contact)
}


export default CompA;
