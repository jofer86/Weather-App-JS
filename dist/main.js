!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=async function(){try{const e=document.querySelector(".city").value,t=await fetch(`https://api.weatherbit.io/v2.0/current?city=${e}&key=c1faea1cee424d32a6d580d4eb1fb86b`),r=await t.json(),n=r.data[0].temp,a=Math.floor(1.8*n+32),o=r.data[0].weather.icon,c=r.data[0].weather.code,i=r.data[0].weather.description,u=r.data[0].city_name;return{temp:"0"===document.querySelector(".temp").value?`${n} ºC`:`${a} ºF`,weatherIcon:o,weatherCode:c,weatherDescription:i,city:u}}catch(e){alert("Please enter a valid City!!")}};var a=async function(){const e=document.querySelector(".results");e&&e.remove();const t=await n(),r=document.querySelector(".appUI"),a=document.createElement("div");a.className="results",r.appendChild(a),document.querySelector(".results").innerHTML=`<h1 class="cityName">${t.city}</h1>\n    <h2 class="temperature"> Temperature is ${t.temp} </h2>\n    <h3> The weather today is going to be: ${t.weatherDescription} </h3>\n    <div class="weather" >\n        <img src="https://www.weatherbit.io/static/img/icons/${t.weatherIcon}.png" alt="" width="200"/>\n    </div>`};document.querySelector(".button").addEventListener("click",a)}]);