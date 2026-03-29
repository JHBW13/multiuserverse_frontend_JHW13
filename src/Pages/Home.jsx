import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

    const [users, setUsers] = useState([])

useEffect(() => {
    loadUsers();
}, []);

    const loadUsers =async () => {
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data);
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
      <td>@mdo</td>
    </tr>
  </tbody>
    ))}
      </table>
    </div>
  )
}