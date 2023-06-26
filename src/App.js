import './App.css';

import React, { useState, useEffect } from 'react';
import { generateUsers } from './users';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(generateUsers());
  }, []);

  useEffect(() => {
    document.title = `Left ${users.length} users`;
  }, [users]);

  const deleteUser = () => {
    const randomIndex = Math.random() * users.length;
    const updatedUsers = [...users];
    updatedUsers.splice(randomIndex, 1);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <button onClick={deleteUser}>Delete</button>
    </div>
  );
}

export default App;


