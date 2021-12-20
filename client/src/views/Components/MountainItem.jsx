import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import NewFeatureForm from '../Forms/FeatureForms/NewFeatureForm'

const MountainItem = (
  {
    item,
    dataSelection,
    mountainItems,
    setMountainItems,
    mountainItemDisplay,
    loaded,
    createMountainItem,
    deleteMountainItem
  }
) => {

  const [features, setFeatures] = useState();
  const itemProper = item[0].toUpperCase() + item.substring(1);
  const itemTitle = itemProper + "s";

  return (
    <div className={item}>
      <Link
        to="/"
      >Home
      </Link>
      <h1>
        {itemTitle}
      </h1>
      <button onClick={(e) => { createMountainItem() }} >Add a new {itemProper}</button>
      {
        // mountainItemDisplay &&
        // <NewFeatureForm />
      }
      {/* Include search bar. Auto update as typing */}
      <table>
        <thead>
          <tr>
            <th>{itemProper} Name</th>
            <th>Location (Run)</th>
            <th>Coordinates</th>
            <th>Type of {itemProper}</th>
          </tr>
        </thead>
        <tbody>
          {loaded && mountainItems.map((currentItem) =>
            <tr key={currentItem._id}>
              <td>{currentItem.Last_Name}</td>
              <td>{currentItem.First_Name}</td>
              <td>{currentItem.Email_Address}</td>
              <td>
                <ul>

                  {currentItem.Position.map((position) =>
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

export default MountainItem;