async function search() {
  try {
    const cityName = document.querySelector('.city').value;
    const result = await fetch(
      `https://api.weatherbit.io/v2.0/current?city=${cityName}&key=c1faea1cee424d32a6d580d4eb1fb86b`
    );
    const data = await result.json();
    const celsiusTemp = data.data[0].temp;
    const farenheitTemp = celsiusTemp * (9 / 5) + 32;
    const weatherIcon = data.data[0].weather.icon;
    const weatherCode = data.data[0].weather.code;
    const weatherDescription = data.data[0].weather.description;

    const rundown = {
      celsiusTemp: celsiusTemp,
      farenheitTemp: farenheitTemp,
      weatherIcon: weatherIcon,
      weatherCode: weatherCode,
      weatherDescription: weatherDescription
    };
    return rundown;
    
  } catch (error) {
    alert('Please enter a valid City!!');
  }
}

export default search
