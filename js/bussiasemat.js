'use strict';

var container = L.DomUtil.get('map'); //Katsotaan, onko kartta alusettu ja mikäli on, poistetaan alustus/alustetaan uudestaan.
if(container != null){
  container._leaflet_id = null;
}

var map = L.map('map').setView([60.189, 24.966], 11); //Luodaan kartta

function piirraKartta() {
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
}

async function haeAsemat() {
  try{
    const vastaus = await fetch('https://opendata.arcgis.com/datasets/b2aa879ce93c4068ac63b64d71f24947_0.geojson', {method: 'GET'}); //Haetaan lämpötilat apista.
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
haeAsemat();