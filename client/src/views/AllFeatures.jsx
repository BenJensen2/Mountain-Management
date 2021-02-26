import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NewFeatureForm from '../Components/FeatureForms/NewFeatureForm'

const AllFeatures = (props) => {

  // Full features list
  const [features, setFeatures] = useState();
  // To ensure all features are loaded before display
  const [loaded, setLoaded] = useState(false);
  const [featureFormDisplay, setFeatureFormDisplay] = useState(false);

  // Get all features as the page loads
  useEffect(() => {
    getFeatures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Sorts featuresList Last_Name from a to z
  const sorted = (featuresList) => {
    return featuresList.sort((a, b) => a.Name.localeCompare(b.Name))
  }

  // Get features through all Features api
  const getFeatures = () => {
    axios.get("http://localhost:8000/api/allFeatures")
      .then(res => {
        setFeatures(sorted(res.data))
        setLoaded(true)
        console.log(res.data)
      })
      .catch(err => {
        console.log("We have an error", err)
        // console.log("This is the error", err.message)
        if (err.message === "Network Error") {
          console.log("The database is probably not connected")
        }
      })
  }

  const createFeatureHandler = () => {
    if (featureFormDisplay===false){
      setFeatureFormDisplay(true);
    } else{
      setFeatureFormDisplay(false)
    }
    // console.log("Let's add someone!!");
  };

  const deleteFeature = (featureId) => {
    console.log("Deleting Feature")
    axios.delete(`http://localhost:8000/api/feature/delete/${featureId}`)
      .then(res => {
        console.log("Feature Deleted")
        setFeatures(features.filter((feature) => feature._id !== featureId));
      })
      .catch(err => {
        console.log("We have an error", err)
        if (err.message === "Network Error") {
          console.log("The database is probably not connected")
        }
      })
  }

  return (
    <div>
      <Link
        to="/"
      >Home
      </Link>
      <h1>
        All Features
      </h1>
      <button onClick={(e) => { createFeatureHandler() }} >Add a new feature</button>
      {
        featureFormDisplay &&
        <NewFeatureForm />
      }
      {/* Include search bar. Auto update as typing */}
      <table>
        <thead>
          <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Email Address</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {loaded && features.map((feature) =>
            <tr key={feature._id}>
              <td>{feature.Last_Name}</td>
              <td>{feature.First_Name}</td>
              <td>{feature.Email_Address}</td>
              <td>
                <ul>

                  {feature.Position.map((position) =>
                    <li key={position} >
                      {position}
                    </li>
                  )}
                </ul>
              </td>
              {/* <td>{feature.Position}</td> */}
              <td>
                <button>
                  {/* <Link
                    to={{
                      pathname: `/feature/${feature._id}`,
                      state: { featureId: `${feature._id}` }
                    }}>
                    Edit
                      </Link> */}
                      Edit
                </button>
              </td>
              <td>
                <button onClick={() => deleteFeature(feature._id)}>
                  Delete
                    </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default AllFeatures;