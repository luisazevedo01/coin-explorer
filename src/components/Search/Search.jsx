import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.25em 1em;
  border-radius: 3px;
  font-size: 1em;
  border: 2px solid darkorange;
`;

const Search = ({ onSearch }) => {
  return (
    <>
      <Input type="text" onChange={(e) => onSearch(e)} />
    </>
  );
};

export default Search;
