import React from 'react';
import FeatureForm from '../Components/FeatureForms/NewFeatureForm'
import { Link } from 'react-router-dom'

const Feature = () => {
  return (
    <div>
      <Link
        to="/">
          Home
      </Link>
      <h1>
        Feature
      </h1>
      <FeatureForm />
    </div>
  )
}

export default Feature