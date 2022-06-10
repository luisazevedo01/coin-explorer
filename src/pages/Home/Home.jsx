import React, { Fragment, useState, useEffect } from "react";
import List from "../../components/List/List.jsx";
import Search from "../../components/Search/Search.jsx";
import fetchCoins from "../../utils/fetchCoins.js";

export default function Home() {
  const [lstCoin, setLstCoin] = useState(null);
  const [hasError, setError] = useState(false);
  const [filteredCoins, setFilteredCoins] = useState(null);

  useEffect(() => {
    fetchCoins(hasError).then((coins) => setLstCoin(coins));
  }, []);

  useEffect(() => {
    fetchCoins(hasError).then((coins) => setLstCoin(coins));
  }, [hasError]);

  const handleSearch = (e) => {
    const value = e.target.value;
    if (!value) return setFilteredCoins(null);
    const filteredLst = lstCoin.filter((el) => el.name.includes(value));
    setFilteredCoins(filteredLst);
  };
  return (
    <Fragment>
      <button onClick={() => setError(true)}>Throw Error</button>
      <Search onSearch={handleSearch} />
      {!hasError ? (
        <List coins={filteredCoins ?? lstCoin} />
      ) : (
        <>
          <p>Unable to fetch list... </p>
          <button onClick={() => setError(false)}>Try again</button>
        </>
      )}
    </Fragment>
  );
}
