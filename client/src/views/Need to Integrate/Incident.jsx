import React from 'react';
import IncidentForm from '../Need to Integrate/IncidentForms/IncidentForm'
import { Link } from 'react-router-dom'

const Incident = () => {
  return (
    <div>
      <Link
        to="/">
          Home
      </Link>
      <h1>
        Incident
      </h1>
      <IncidentForm />
    </div>
  )
}

export default Incident