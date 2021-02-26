import React from 'react';
import RunForm from '../Components/RunForms/NewRunForm'
import { Link } from 'react-router-dom'

const Run = () => {
  return (
    <div>
      <Link
        to="/">
          Home
      </Link>
      <h1>
        Run
      </h1>
      <RunForm />
    </div>
  )
}

export default Run