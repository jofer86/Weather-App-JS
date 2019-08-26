import search from './apilogic';

async function DOMWork() {
  const reset = document.querySelector('.results');
  if (reset) {
    reset.remove();
  };

  const data = await search();
  const appUI = document.querySelector('.appUI');
  const child = document.createElement('div');  
  child.className = 'results';
  appUI.appendChild(child);
  const info = document.querySelector('.results');  

  info.innerHTML =
    `<h1 class="cityName">${data.city}</h1>
    <h2 class="temperature"> Temperature is ${data.temp} </h2>
    <h3> The weather today is going to be: ${data.weatherDescription} </h3>
    <div class="weather" >
        <img src="https://www.weatherbit.io/static/img/icons/${data.weatherIcon}.png" alt="" width="200"/>
    </div>`
    ;
}

export default DOMWork;
