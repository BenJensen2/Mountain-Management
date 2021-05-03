import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NewRunForm from '../Components/RunForms/NewRunForm'

const AllRuns = (props) => {

  // Full runs list
  const [runs, setRuns] = useState();
  // To ensure all runs are loaded before display
  const [loaded, setLoaded] = useState(false);
  const [runFormDisplay, setRunFormDisplay] = useState(false);

  // Get all runs as the page loads
  useEffect(() => {
    getRuns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Sorts runsList Last_Name from a to z
  const sorted = (runsList) => {
    return runsList.sort((a, b) => a.Name.localeCompare(b.Name))
  }

  // Get runs through all Runs api
  const getRuns = () => {
    axios.get("http://localhost:8000/api/allRuns")
      .then(res => {
        setRuns(sorted(res.data))
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

  const createRunHandler = () => {
    if (runFormDisplay===false){
      setRunFormDisplay(true);
    } else{
      setRunFormDisplay(false)
    }
    // console.log("Let's add someone!!");
  };

  const deleteRun = (runId) => {
    console.log("Deleting Run")
    axios.delete(`http://localhost:8000/api/run/delete/${runId}`)
      .then(res => {
        console.log("Run Deleted")
        setRuns(runs.filter((run) => run._id !== runId));
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
        All Runs
      </h1>
      <button onClick={(e) => { createRunHandler() }} >Add a new run</button>
      {
        runFormDisplay &&
        <NewRunForm />
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
          {loaded && runs.map((run) =>
            <tr key={run._id}>
              <td>{run.Name}</td>
              <td>{run.Location}</td>
              <td>{run.Difficulty}</td>
              <td>
                <button>
                  {/* <Link
                    to={{
                      pathname: `/run/${run._id}`,
                      state: { runId: `${run._id}` }
                    }}>
                    Edit
                      </Link> */}
                      Edit
                </button>
              </td>
              <td>
                <button onClick={() => deleteRun(run._id)}>
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

export default AllRuns;