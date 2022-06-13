import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchCoin } from "../../utils/fetchCoins";

const Section = styled.section`
  margin: 8px;
  padding: 8px;
  background-color: #3d3d3d;
  a {
    color: red;
  }
`;

const H1 = styled.h1`
  span {
    margin: 8px;
    cursor: pointer;
  }
`;

const CoinDetails = () => {
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    fetchCoin(window.location.pathname).then((_coin) => {
      setCoin(_coin);
      console.log(_coin);
    });
  }, []);

  return (
    <>
      {coin ? (
        <div>
          <H1>
            <span onClick={() => console.log("back")}>👈</span>
            {coin?.name}({coin?.symbol.toUpperCase()})
          </H1>
          <Section>
            <p dangerouslySetInnerHTML={{ __html: coin.description["en"] }}></p>
            <ul>
              {coin?.tickers.map((ticker, index) => {
                return (
                  <li key={index}>
                    {ticker.base} {"=>"} <strong>{ticker.last}</strong>
                    {ticker.target}
                  </li>
                );
              })}
            </ul>
          </Section>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default CoinDetails;
