async function search() {
  try {
    const cityName = document.querySelector('.city').value;
    const result = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${cityName}`
    );
    const data = await result.json();
    const { woeid: cityID } = data[0];
    const forecast = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${cityID}`
    );
    const foreData = await forecast.json();
    const {
      the_temp: celsiusTemp,
      weather_state_abbr: weatherState
    } = foreData.consolidated_weather[0];

    const farenheitTemp = (celsiusTemp * 9) / 5 + 32;
    const degreeType = document.querySelector('.temp').value;
    const rundown = {
      celsius: celsiusTemp,
      farenheit: farenheitTemp,
      state: weatherState,
      degree: degreeType
    };
    console.log(rundown);
  } catch (error) {
    alert('Please enter a valid City!!');
  }
}

export default search
