import { useEffect, useState } from 'react';

const getUsers = () => {
  return fetch('http://localhost:8000')
    .then((response) => response.json())
    .then((data) => data);
};

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>{users.length > 0 && users.map((user, i) => <li key={'user-'[i]}>{user.name}</li>)}</ul>
    </div>
  );
}

export default App;
