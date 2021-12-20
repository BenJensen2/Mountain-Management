import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Features from './MountainItems/Features'
import Lifts from './MountainItems/Lifts'

const MountainItems = (
  { 
    dataSelection,
    item,
    mountainItems,
    setMountainItems 
  }
) => {


  // Ensures all items are loaded before display
  const [loaded, setLoaded] = useState(false);
  const [mountainItemDisplay, setMountainItemDisplay] = useState(false);

  // Gets all items as the page loads
  useEffect(() => {
    getMountainItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  // Database OPERATIONS for all items
  // Sorts by name
  const sortMountainItems = (mountainItemsList) => {
    return mountainItemsList.sort((a, b) => a.Name.localeCompare(b.Name))
  }

  const getMountainItems = () => {
    axios.get(`http://localhost:8000/api/${item}/all`)
      .then(res => {
        setMountainItems(sortMountainItems(res.data))
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

  const getMountainItem = () => {

  }

  const createMountainItem = () => {
    if (mountainItemDisplay === false) {
      setMountainItemDisplay(true);
    } else {
      setMountainItemDisplay(false)
    }
  }

  const updateMountainItem = () => {

  }

  const deleteMountainItem = (mountainItemId) => {
    console.log("Deleting Item")
    axios.delete(`http://localhost:8000/api/${item}/delete/${mountainItemId}`)
      .then(res => {
        console.log("Item Deleted")
        setMountainItems(mountainItems.filter((mountainItem) => mountainItem._id !== mountainItemId));
      })
      .catch(err => {
        console.log("We have an error", err)
        if (err.message === "Network Error") {
          console.log("The database is probably not connected")
        }
      })
  }

  if (item == "feature") {
    return (<Features
      // Data Selection
      dataSelection={dataSelection}
      mountainItems={mountainItems}
      setMountainItems={setMountainItems}
      loaded={loaded}

      // Database Operations
      getMountainItems={getMountainItems}       // Multiple
      getMountainItem={getMountainItem} 
      createMountainItem={createMountainItem}
      updateMountainItem={updateMountainItem}
      deleteMountainItem={deleteMountainItem}

    />)
  } else if (item == "lift"){
    
    
  }

}

export default MountainItems;