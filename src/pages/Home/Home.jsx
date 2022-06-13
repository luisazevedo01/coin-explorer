import React, { Fragment, useState, useEffect } from "react";
import List from "../../components/List/List.jsx";
import Search from "../../components/Search/Search.jsx";
import fetchCoins from "../../utils/fetchCoins.js";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-family: Sen;
  font-weight: bolder;
  font-size: 48px;
  margin: 1em;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "darkorange" : "white")};
  color: ${(props) => (props.primary ? "white" : "darkorange")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkorange;
  border-radius: 3px;
`;

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
      <Title>Coin Explorer</Title>
      <Button primary onClick={() => setError(true)}>
        Throw Error
      </Button>
      <Search onSearch={handleSearch} />
      {!hasError ? (
        <List coins={filteredCoins ?? lstCoin} />
      ) : (
        <>
          <p>Unable to fetch list... </p>
          <Button onClick={() => setError(false)}>Try again</Button>
        </>
      )}
    </Fragment>
  );
}
