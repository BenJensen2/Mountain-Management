import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MemberForm from '../Components/Forms/MemberForm';

const AllMembers = (props) => {

  // Full members list
  const [members, setMembers] = useState();
  // To ensure all members are loaded before display
  const [loaded, setLoaded] = useState(false);
  const [memberFormDisplay, setMemberFormDisplay] = useState(false);

  // Get all members as the page loads
  useEffect(() => {
    getMembers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Sorts membersList Last_Name from a to z
  const sorted = (membersList) => {
    return membersList.sort((a, b) => a.Last_Name.localeCompare(b.Last_Name))
  }

  // Get members through all Members api
  const getMembers = () => {
    axios.get("http://localhost:8000/api/allMembers")
      .then(res => {
        // console.log("These are our members")
        // console.log(res.data)
        setMembers(sorted(res.data))
        setLoaded(true)
        // console.log("Sorted Members", sorted(res.data))
      })
      .catch(err => {
        console.log("We have an error", err)
        // console.log("This is the error", err.message)
        if (err.message === "Network Error") {
          console.log("The database is probably not connected")
        }
      })
  }

  const createMemberHandler = () => {
    // console.log("Let's add someone!!");
    setMemberFormDisplay(true);
  };

  const deleteMember = (memberId) => {
    console.log("Deleting Member")
    axios.delete(`http://localhost:8000/api/member/delete/${memberId}`)
      .then(res => {
        console.log("Member Deleted")
        setMembers(members.filter((member) => member._id !== memberId));
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
        All Members
      </h1>
      <button onClick={(e) => { createMemberHandler() }} >Add a new member</button>
      {
        memberFormDisplay &&
        <MemberForm />
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
          {loaded && members.map((member) =>
            <tr key={member._id}>
              <td>{member.Last_Name}</td>
              <td>{member.First_Name}</td>
              <td>{member.Email_Address}</td>
              <td>
                <ul>

                  {member.Position.map((position) =>
                    <li key={position} >
                      {position}
                    </li>
                  )}
                </ul>
              </td>
              {/* <td>{member.Position}</td> */}
              <td>
                <button>
                  {/* <Link
                    to={{
                      pathname: `/member/${member._id}`,
                      state: { memberId: `${member._id}` }
                    }}>
                    Edit
                      </Link> */}
                      Edit
                </button>
              </td>
              <td>
                <button onClick={() => deleteMember(member._id)}>
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

export default AllMembers;