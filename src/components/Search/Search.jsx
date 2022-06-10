import React from "react";

const Search = ({ onSearch }) => {
  return (
    <div>
      <input type="text" onChange={(e) => onSearch(e)} />
    </div>
  );
};

export default Search;
