'use strict';

//Alla olevat funktiot päivittävät päänäkymää valitun moodin mukaan.
//!!!Skriptin poisto puuttuu

function toggleParkkipaikat() {
  const main = document.querySelector("main"); //Merkitään main-elementti muistiin.

  document.getElementById("article").remove(); //Poistetaan vanha article.

  let article = document.createElement('article'); //Luodaan uusi article ja syötetään siihen pohjustavat tiedot.
  article.setAttribute("id", "article");
  const art = `<div id="map" style="width: 100%; height: 100%;"></div>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"><\/script>`;

  article.innerHTML = art;
  main.appendChild(article);

  console.log('parkkipaikat');

  var head= document.getElementsByTagName('head')[0]; //Luodaan uusi skripti, joka luotaessa ajaa sen sisällön.
  var script= document.createElement('script');
  script.src= 'js/parkkipaikat.js';
  head.appendChild(script);
}

function toggleAsemat() {
  const main = document.querySelector("main"); //Merkitään main-elementti muistiin.

  document.getElementById("article").remove(); //Poistetaan vanha article.

  let article = document.createElement('article'); //Luodaan uusi article ja syötetään siihen pohjustavat tiedot.
  article.setAttribute("id", "article");
  const art = `<div id="map" style="width: 100%; height: 100%;"></div>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"><\/script>`;

  article.innerHTML = art;
  main.appendChild(article);

  console.log('bussiasemat');

  var head= document.getElementsByTagName('head')[0]; //Luodaan uusi skripti, joka luotaessa ajaa sen sisällön.
  var script= document.createElement('script');
  script.src= 'js/bussiasemat.js';
  head.appendChild(script);
}

function toggleSpotit() {
  const main = document.querySelector("main"); //Merkitään main-elementti muistiin.
  document.getElementById("article").remove();

  let article = document.createElement('article'); //Luodaan uusi article ja syötetään siihen pohjustavat tiedot.
  article.setAttribute("id", "article");
  const art = `<div id="map" style="width: 100%; height: 100%;"></div>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"><\/script>`;

  article.innerHTML = art;
  main.appendChild(article);

  console.log('luontoreitit');

  let head = document.getElementsByTagName('head')[0]; //Luodaan uusi skripti, joka luotaessa ajaa sen sisällön.
  let script= document.createElement('script');
  script.src = 'js/luontoreitit.js';
  head.appendChild(script);
}
