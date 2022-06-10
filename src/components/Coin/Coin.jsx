import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin }) => {
  return (
    <li>
      <Link to={`/${coin.id}`}>${coin.name}</Link>
      {/*`${coin.name}:  $${JSON.stringify(coin.market_data.current_price.usd)}`*/}
    </li>
  );
};

export default Coin;
