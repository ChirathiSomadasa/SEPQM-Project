import React, { useState, useEffect } from 'react';
import './User.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5002/user')
      .then(result => setUsers(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5002/user/deleteUser/${id}`)
      .then(() => {
        alert("User deleted successfully!");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        alert("Error: Failed to delete the user.");
      });
  };

  return (
    <>
      <h1>User Details</h1>
      <div className='top'>
        <Link className='add_btn' to="/create">Add +</Link>
      </div>
      <div className='table_details'>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>
                  <Link to={`/update/${user._id}`} className='edit_button'>Edit</Link>
                  <button className='delete_button' onClick={(e) => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default User;