import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import photo from './user.png';

const Card = ({ user }) => {
  return (
    <div className='card'>
      <img src={photo} alt="User" className='card-image' />
      <div className='card-details'>
        <h2 className='card-name'>{user.name}</h2>
        <p className='card-username'>User name: {user.username}</p>
        <p className='card-contact'>Email: {user.email}</p>    
      </div>
    </div>
  );
};

function App() {
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        setFilteredData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = query => {
    const filteredUsers = userData.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredUsers);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <div className='card-exe'>
        {filteredData.map(user => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
