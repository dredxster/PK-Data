'use strict';

var container = L.DomUtil.get('map'); //Katsotaan, onko kartta alusettu ja mikäli on, poistetaan alustus/alustetaan uudestaan.
if(container != null){
  container._leaflet_id = null;
}

var map = L.map('map').setView([60.169, 24.946], 14); //Luodaan kartta

function piirraKartta() {
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
}

async function haePyorat() {
  try{
    const vastaus = await fetch('https://opendata.arcgis.com/datasets/ee54ddf0b4db41d69410689394b7c00d_0.geojson', {method: 'GET'}); //Haetaan lämpötilat apista.
    if (!vastaus.ok) throw new Error('jokin meni pieleen');
    const asemat = await vastaus.json();
    tiedotKartalle(asemat);
  } catch (error) {
    console.log(error);
  }
}

function tiedotKartalle(asemat) {
  console.log(asemat);
  L.geoJSON(asemat.features, {
  }).addTo(map);
}

piirraKartta();
haePyorat();