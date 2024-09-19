import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      onSearch(query);  // Trigger the onSearch callback when the form is submitted
    }
  };
  return (
    <form className="d-flex mx-auto" role="search" style={{ width: '50%' }} onSubmit={handleSearch}>
      <input
        className="form-control me-2 form-control-sm"
        type="search"
        placeholder="Search for products..."
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}  // Update state with input value
        style={{ flex: '1', height: '30px' }}
      />
      <button style={{ height: '50px' }} className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
