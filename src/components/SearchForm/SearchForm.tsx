import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (


    <div className="search-form">
      <label className="search-form-label">
        <span className="search-form-title">Search for TV Shows:</span>
          <input
            className="search-form-field"
            placeholder="Search for TV Shows"
            type="text"/>
      </label>
      <span className="search-form-spinner">Loading...</span>
    </div>
  );
};

export default SearchForm;