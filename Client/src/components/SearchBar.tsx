import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim()) {
      console.log(query);
      onSearch(query);  // Call the onSearch prop with the query
    } else {
      alert("Item not found");
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
        style={{ flex: '1', height: '40px' }}
      />
      <button style={{ height: '40px' }} className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
