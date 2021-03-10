'use strict';

//Alla olevat funktiot päivittävät päänäkymää valitun moodin mukaan.

function toggleParkkipaikat() {
  const main = document.querySelector("main"); //Merkitään main-elementti muistiin.

  document.getElementById("nscript").remove(); //Poistetaan vanha scripti tag sivuston suortiuskyvyn ylläpitämiseksi.
  document.getElementById("article").remove(); //Poistetaan vanha article.

  let article = document.createElement('article'); //Luodaan uusi article ja syötetään siihen pohjustavat tiedot.
  article.setAttribute("id", "article");
  const art = `<div id="map" style="width: 100%; height: 100%;"></div>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"><\/script>`;

  article.innerHTML = art;
  main.appendChild(article);

  console.log('parkkipaikat');

  let head= document.getElementsByTagName('head')[0]; //Luodaan uusi skripti, joka luotaessa ajaa sen sisällön.
  let script= document.createElement('script');
  script.id= 'nscript'
  script.src= 'js/parkkipaikat.js';
  head.appendChild(script);
}

function togglePysakit() {
  const main = document.querySelector("main"); //Merkitään main-elementti muistiin.

  document.getElementById("nscript").remove(); //Poistetaan vanha scripti tag sivuston suortiuskyvyn ylläpitämiseksi.
  document.getElementById("article").remove(); //Poistetaan vanha article.

  let article = document.createElement('article'); //Luodaan uusi article ja syötetään siihen pohjustavat tiedot.
  article.setAttribute("id", "article");
  const art = `<div id="map" style="width: 100%; height: 100%;"></div>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"><\/script>`;

  article.innerHTML = art;
  main.appendChild(article);

  console.log('bussipysäkit');

  let head= document.getElementsByTagName('head')[0]; //Luodaan uusi skripti, joka luotaessa ajaa sen sisällön.
  let script= document.createElement('script');
  script.id= 'nscript'
  script.src= 'js/bussipysakit.js';
  head.appendChild(script);
}

function toggleSpotit() {
  const main = document.querySelector("main"); //Merkitään main-elementti muistiin.

  document.getElementById("nscript").remove(); //Poistetaan vanha scripti tag sivuston suortiuskyvyn ylläpitämiseksi.
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
  script.id= 'nscript'
  script.src = 'js/luontoreitit.js';
  head.appendChild(script);
}

function togglePyorat() {
  const main = document.querySelector("main"); //Merkitään main-elementti muistiin.

  document.getElementById("nscript").remove(); //Poistetaan vanha scripti tag sivuston suortiuskyvyn ylläpitämiseksi.
  document.getElementById("article").remove();

  let article = document.createElement('article'); //Luodaan uusi article ja syötetään siihen pohjustavat tiedot.
  article.setAttribute("id", "article");
  const art = `<div id="map" style="width: 100%; height: 100%;"></div>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"><\/script>`;

  article.innerHTML = art;
  main.appendChild(article);

  console.log('pyorat');

  let head = document.getElementsByTagName('head')[0]; //Luodaan uusi skripti, joka luotaessa ajaa sen sisällön.
  let script= document.createElement('script');
  script.id= 'nscript'
  script.src = 'js/pyorat.js';
  head.appendChild(script);
}

function toggleVedet() {
  const main = document.querySelector("main"); //Merkitään main-elementti muistiin.

  document.getElementById("nscript").remove(); //Poistetaan vanha scripti tag sivuston suortiuskyvyn ylläpitämiseksi.
  document.getElementById("article").remove();

  let article = document.createElement('article'); //Luodaan uusi article ja syötetään siihen pohjustavat tiedot.
  article.setAttribute("id", "article");
  const art = `<div id="map" style="width: 100%; height: 100%;"></div>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"><\/script>`;

  article.innerHTML = art;
  main.appendChild(article);

  console.log('uimarannat');

  let head = document.getElementsByTagName('head')[0]; //Luodaan uusi skripti, joka luotaessa ajaa sen sisällön.
  let script= document.createElement('script');
  script.id= 'nscript'
  script.src = 'js/uimarannat.js';
  head.appendChild(script);
}

function toggleLinjat() {
  const main = document.querySelector("main"); //Merkitään main-elementti muistiin.

  document.getElementById("nscript").remove(); //Poistetaan vanha scripti tag sivuston suortiuskyvyn ylläpitämiseksi.
  document.getElementById("article").remove();

  let article = document.createElement('article'); //Luodaan uusi article ja syötetään siihen pohjustavat tiedot.
  article.setAttribute("id", "article");
  const art = `<div id="map" style="width: 100%; height: 100%;"></div>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"><\/script>`;

  article.innerHTML = art;
  main.appendChild(article);

  console.log('bussilinjat');

  let head = document.getElementsByTagName('head')[0]; //Luodaan uusi skripti, joka luotaessa ajaa sen sisällön.
  let script= document.createElement('script');
  script.id= 'nscript'
  script.src = 'js/bussilinjat.js';
  head.appendChild(script);
}

function toggleMatkustajat() {
  const main = document.querySelector("main"); //Merkitään main-elementti muistiin.

  document.getElementById("nscript").remove(); //Poistetaan vanha scripti tag sivuston suortiuskyvyn ylläpitämiseksi.
  document.getElementById("article").remove();

  let article = document.createElement('article'); //Luodaan uusi article ja syötetään siihen pohjustavat tiedot.
  article.setAttribute("id", "article");
  const art = `<div id="map" style="width: 100%; height: 100%;"></div>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"><\/script>`;

  article.innerHTML = art;
  main.appendChild(article);

  console.log('matkustajat');

  let head = document.getElementsByTagName('head')[0]; //Luodaan uusi skripti, joka luotaessa ajaa sen sisällön.
  let script= document.createElement('script');
  script.id= 'nscript'
  script.src = 'js/matkustajat.js';
  head.appendChild(script);
}

function toggleautovahti() {
  const main = document.querySelector("main"); //Merkitään main-elementti muistiin.

  document.getElementById("nscript").remove(); //Poistetaan vanha scripti tag sivuston suortiuskyvyn ylläpitämiseksi.
  document.getElementById("article").remove();

  let article = document.createElement('article'); //Luodaan uusi article ja syötetään siihen pohjustavat tiedot.
  article.setAttribute("id", "article");
  const art = `<div id="map" style="width: 100%; height: 100%;"></div>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"><\/script>`;

  article.innerHTML = art;
  main.appendChild(article);

  console.log('autovahti');

  let head = document.getElementsByTagName('head')[0]; //Luodaan uusi skripti, joka luotaessa ajaa sen sisällön.
  let script= document.createElement('script');
  script.id= 'nscript'
  script.src = 'js/autovahti.js';
  head.appendChild(script);
}
