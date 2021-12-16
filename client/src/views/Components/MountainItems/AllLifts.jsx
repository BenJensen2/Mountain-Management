import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NewLiftForm from '../Forms/LiftForms/NewLiftForm'

const AllLifts = (props) => {

  // Full lifts list
  const [lifts, setLifts] = useState();
  // To ensure all lifts are loaded before display
  const [loaded, setLoaded] = useState(false);
  const [liftFormDisplay, setLiftFormDisplay] = useState(false);

  // Get all lifts as the page loads
  useEffect(() => {
    getLifts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Sorts liftsList Last_Name from a to z
  const sorted = (liftsList) => {
    return liftsList.sort((a, b) => a.Number.localeCompare(b.Number))
  }

  // Get lifts through all Lifts api
  const getLifts = () => {
    axios.get("http://localhost:8000/api/allLifts")
      .then(res => {
        setLifts(sorted(res.data))
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

  const createLiftHandler = () => {
    if (liftFormDisplay===false){
      setLiftFormDisplay(true);
    } else{
      setLiftFormDisplay(false)
    }
    // console.log("Let's add someone!!");
  };

  const deleteLift = (liftId) => {
    console.log("Deleting Lift")
    axios.delete(`http://localhost:8000/api/lift/delete/${liftId}`)
      .then(res => {
        console.log("Lift Deleted")
        setLifts(lifts.filter((lift) => lift._id !== liftId));
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
        All Lifts
      </h1>
      <button onClick={(e) => { createLiftHandler() }} >Add a new lift</button>
      {
        liftFormDisplay &&
        <NewLiftForm />
      }
      {/* Include search bar. Auto update as typing */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {loaded && lifts.map((lift) =>
            <tr key={lift._id}>
              <td>{lift.Name}</td>
              <td>{lift.Location}</td>
              <td>{lift.Difficulty}</td>
              <td>
                <button>
                  {/* <Link
                    to={{
                      pathname: `/lift/${lift._id}`,
                      state: { liftId: `${lift._id}` }
                    }}>
                    Edit
                      </Link> */}
                      Edit
                </button>
              </td>
              <td>
                <button onClick={() => deleteLift(lift._id)}>
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

export default AllLifts;