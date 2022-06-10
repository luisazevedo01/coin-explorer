import React from "react";
import Coin from "../Coin/Coin.jsx";

const List = ({ coins }) => {
  return (
    <ul>
      {coins &&
        coins.map((coin, index) => {
          return <Coin key={index} coin={coin} />;
        })}
    </ul>
  );
};

export default List;
