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
    <h2 class="temperature"> Temperature is ${data.celsiusTemp} ${data.weatherDescription} </h2>`;
}

export default DOMWork;
