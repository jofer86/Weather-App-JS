async function search() {
  try {
    const cityName = document.querySelector('.city').value;    
    const result = await fetch(
      `https://api.weatherbit.io/v2.0/current?city=${cityName}&key=c1faea1cee424d32a6d580d4eb1fb86b`
    );
    const data = await result.json();

    const rundown = {
      celsiusTemp: data.data[0].temp,
      farenheitTemp: celsiusTemp * (9 / 5) + 32,
      weatherIcon: data.data[0].weather.icon,
      weatherCode: data.data[0].weather.code,
      weatherDescription: data.data[0].weather.description
    };
    return rundown;
    
  } catch (error) {
    alert('Please enter a valid City!!');
  }
}

export default search
