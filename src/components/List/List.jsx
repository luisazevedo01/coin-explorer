import React from "react";
import styled from "styled-components";
import Coin from "../Coin/Coin.jsx";

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
const List = ({ coins }) => {
  return (
    <UL>
      {coins &&
        coins.map((coin, index) => {
          return <Coin key={index} coin={coin} />;
        })}
    </UL>
  );
};

export default List;
