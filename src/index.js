async function search() {
  const cityName = document.querySelector('.city').value;
  const result = await fetch(
    `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${cityName}`
  );
  const data = await result.json();
  const cityID = data[0].woeid;
  const forecast = await fetch(
    `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${cityID}`
  );
  const foreData = await forecast.json();
  console.log(foreData);
}

document.querySelector('.button').addEventListener('click', search);
