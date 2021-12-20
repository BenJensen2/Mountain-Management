import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewLiftForm from '../Forms/LiftForms/NewLiftForm'

const AllLifts = (
  {
    dataSelection,
    mountainItems,
    setMountainItems,
    mountainItemDisplay,
    loaded,
    createMountainItem,
    deleteMountainItem
  }
) => {

  const [lifts, setLifts] = useState();

  return (
    <div className='lifts'>
      <Link
        to="/"
      >Home
      </Link>
      <h1>
        All Lifts
      </h1>
      <button onClick={(e) => { createMountainItem() }} >Add a new lift</button>
      {
        mountainItemDisplay &&
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
          {loaded && mountainItems.map((currentItem) =>
            <tr key={currentItem._id}>
              <td>{currentItem.Name}</td>
              <td>{currentItem.Location}</td>
              <td>{currentItem.Difficulty}</td>
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
                <button onClick={() => deleteMountainItem(currentItem._id)}>
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