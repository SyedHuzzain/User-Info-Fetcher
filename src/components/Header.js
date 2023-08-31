import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = event => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      <nav className="navbar">
        <h2>User nfo</h2>
        <form className='search-form' action="/search">
          <input
            type="text"
            placeholder='Search'
            value={searchQuery}
            onChange={handleSearch}
          />
          <button type='submit'>Search</button>
        </form>
      </nav>
    </div>
  );
};

export default Header;
