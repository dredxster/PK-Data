'use strict';

var container = L.DomUtil.get('map');  //Katsotaan, onko kartta alusettu ja mikäli on, poistetaan alustus/alustetaan uudestaan.
if(container != null){
  container._leaflet_id = null;  //var käytössä, sillä let heittää errorin.
}

var map = L.map('map').setView([60.194392, 24.977437], 12);  //Luodaan kartta

function piirraKartta() {  //Piirretään kartta selaimeen.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
}

async function haeLinjat() {  //Haetaan apista tiedot linjoista.
  try{
    const vastaus = await fetch('https://opendata.arcgis.com/datasets/015369a569e340cd953222dd441f4bb6_0.geojson', {method: 'GET'});
    if (!vastaus.ok) throw new Error('jokin meni pieleen');
    const linjat = await vastaus.json();
    linjatKartalle(linjat);
  } catch (error) {
    console.log(error);
  }
}

function linjatKartalle(linjat) {  //Piirretään apista kerätyt linjat kartalle.
  L.geoJSON(linjat.features).addTo(map);
}

piirraKartta();
haeLinjat();