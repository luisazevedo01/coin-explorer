import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomLink = styled(Link)`
  color: orange;
  font-size: 1em;
  text-decoration: none;
  margin: 8px;
  padding: 3px;
`;
const LI = styled.li`
  border: 2px solid white;
`;
const Coin = ({ coin }) => {
  return (
    <LI>
      <CustomLink to={`/${coin.id}`}>{coin.name}</CustomLink>
    </LI>
  );
};

export default Coin;
