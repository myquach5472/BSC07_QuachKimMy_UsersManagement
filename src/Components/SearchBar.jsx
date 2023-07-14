import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../Redux/action';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.searchQuery);

  const handleSearch = () => {
    dispatch(setSearchQuery(searchTerm));
  };

  const handleReset = () => {
    setSearchTerm('');
    dispatch(setSearchQuery(''));
  };

  return (
    <div className="container-fluid">
      <form className="d-flex p-2" role="search">
        <input
          onChange={e => setSearchTerm(e.target.value)}
          value={searchTerm}
          className="form-control me-2"
          type="search"
          placeholder="Search (Do not press Enter)"
          aria-label="Search"
          
        />
        <button
          onClick={handleSearch}
          className="btn btn-outline-success me-1 fw-bold"
          type="button"
        >
          Search
        </button>
        <button
          onClick={handleReset}
          className="btn btn-outline-success fw-bold"
          type="button"
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
