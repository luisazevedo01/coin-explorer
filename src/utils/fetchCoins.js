export default async function fetchCoins() {
  try {
    let url = process.env.REACT_APP_CG_URL_API + "coins/";
    let response = await fetch(url);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Error fetching coins...");
    console.error(error);
  }
}

export async function fetchCoin(id) {
  try {
    let url = process.env.REACT_APP_CG_URL_API + `coins${id}`;
    let response = await fetch(url);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(`Error fetching coin ${id}...`);
    console.error(error);
  }
}
