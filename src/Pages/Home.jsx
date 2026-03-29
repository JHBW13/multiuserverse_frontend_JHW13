import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Home() {

    const [users, setUsers] = useState([])

const { id } = useParams();   // <-- FIXED

useEffect(() => {
    loadUsers();
}, []);

    const loadUsers =async () => {
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data);
    }

const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
}

  return (
    <div className='container-fluid'>
      <div className='py-4'></div>
      <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>

{
    users.map((user, index) => (
  <tbody key={index}>
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{user.name}</td>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>
        
        <Link 
        className="btn btn-primary mx-2"
        to={`/viewuser/${user.id}`}>
            <span className="btn-view-desktop">View</span>
            <span className="btn-view-mobile"> <i className="fa-solid fa-eye"></i></span>
        </Link>
        <Link className='btn btn-outline-primary mx-2' to={`/edit/${user.id}`}>
          <span className="btn-edit-desktop">Edit</span>
          <span className="btn-edit-mobile"> <i className="&#9998"></i></span>
        </Link>
        </Link>
        <button className='btn btn-danger mx-2' 
        onClick={() => deleteUser(user.id)}>
          <span className="btn-delete-desktop">Delete</span>
          <span className="btn-delete-mobile"> <i className="&#10005"></i></span>
        </button>
      </td>
    </tr>
  </tbody>
    ))}
      </table>
    </div>
  )
}