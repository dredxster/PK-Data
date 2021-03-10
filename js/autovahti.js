'use strict';

var container = L.DomUtil.get('map'); //Katsotaan, onko kartta alusettu ja mikäli on, poistetaan alustus/alustetaan uudestaan.
if(container != null){
  container._leaflet_id = null;
}

var map = L.map('map').setView([60.169, 24.946], 14); //Luodaan kartta

function piirraKartta() {  //Piirretään kartta selaimeen.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
}

async function haeAutot() { //Haetaan apista tiedot pyöristä.
  try{
    const vastaus = await fetch('http://gis.vantaa.fi/rest/telemetry/v1/vehicle/29495', {method: 'GET'}); //Haetaan lämpötilat apista.
    if (!vastaus.ok) throw new Error('jokin meni pieleen');
    const auto = await vastaus.json();
    tiedotKartalle(auto);
  } catch (error) {
    console.log(error);
  }
}

function tiedotKartalle(auto) { //Sijoitetaan apista kerätyt tiedot kartalle ja puretaan apista lisätietoa ponnahdusikkunaan, mikäli kohdetta klikataan.
  console.log(auto);

  for (let i = 0; i < 1; i++) {

    let tyyppi = auto.features[i].properties.status;
    let lon = auto.features[i].geometry.coordinates[0][7][0];
    let lat = auto.features[i].geometry.coordinates[0][7][1];

    L.marker([lat, lon]).addTo(map)
    .bindPopup(`<p>Auton tyyppi: ${tyyppi}</p>`);
  }
}


piirraKartta();
haeAutot();