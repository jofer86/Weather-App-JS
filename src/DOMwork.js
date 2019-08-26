import search from './apilogic';

async function DOMWork() {
  const reset = document.querySelector('.results');
  if (reset) {
    reset.remove();
  };

  const { city, temp, weatherDescription, weatherIcon } = await search();
  const appUI = document.querySelector('.appUI');
  const child = document.createElement('div');  
  child.className = 'results';
  appUI.appendChild(child);
  const info = document.querySelector('.results');  

  info.innerHTML =
    `<h1 class="cityName">${city}</h1>
    <h2 class="temperature"> Temperature is ${temp} </h2>
    <h3> The weather today is going to be: ${weatherDescription} </h3>
    <div class="weather" >
        <img src="https://www.weatherbit.io/static/img/icons/${weatherIcon}.png" alt="" width="200"/>
    </div>`
    ;
}

export default DOMWork;
