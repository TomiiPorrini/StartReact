import React from 'react'
import { Conected } from '../models/Conected'
import { Contact } from '../models/Contact'
import CompB from './CompB'

const CompA = () => {
    
    const contacto = new Contact('Tomas', 'Porrini', 'akjsdn@ansjd.com', true)
    console.log(contacto)

  return (
    <div>
        <div>
            <h1>Su Contacto: </h1>
        </div>
    
        {/* Renderización del componente B */}
        <CompB contact = {contacto}></CompB>
    </div>
    
  )
}

export default CompA;
