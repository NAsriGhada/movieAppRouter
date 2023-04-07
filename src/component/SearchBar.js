import React from "react";

const SearchBar = ({ setQuery }) => {
  return (
    <div>
      <form>
        <label>Search movies</label>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
      </form>
    </div>
  );
};

export default SearchBar;
