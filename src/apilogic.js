async function search() {
	try {
		const cityName = document.querySelector('.city').value;
		const result = await fetch(
			`https://api.weatherbit.io/v2.0/current?city=${cityName}&key=c1faea1cee424d32a6d580d4eb1fb86b`
		);
		const data = await result.json();
		const celsiusTemp = data.data[0].temp;
		const farenheitTemp = Math.floor(celsiusTemp * (9 / 5) + 32);
		const weatherIcon = data.data[0].weather.icon;
		const weatherCode = data.data[0].weather.code;
		const weatherDescription = data.data[0].weather.description;
		const city = data.data[0].city_name;
		const degreeValue = document.querySelector('.temp').value;
		const rundown = {
			temp: degreeValue === '0' ? `${celsiusTemp} ºC` : `${farenheitTemp} ºF`,
			weatherIcon: weatherIcon,
			weatherCode: weatherCode,
			weatherDescription: weatherDescription,
			city: city
		};
		return rundown;
    
	} catch (error) {
		alert('Please enter a valid City!!');
	}
}

export default search;
