import { useEffect, useState } from "react";
import { fetchCoin } from "../../utils/fetchCoins";

const styles = {
  section: {
    display: "flex",
    margin: "8px",
  },
};

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
          <h1>
            {coin?.name}({coin?.symbol.toUpperCase()})
          </h1>
          <section style={styles.section}>
            <p>{coin.description["en"]}</p>
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
          </section>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default CoinDetails;
