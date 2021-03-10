'use strict';

//HSL:n pysäkkien ja asemien nousijamäärien arkipäivän keskiarvot marraskuussa 2016.

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

async function haeMatkustajat() { //Haetaan apista tiedot pyöristä.
  try{
    const vastaus = await fetch('https://opendata.arcgis.com/datasets/c26bd38e37eb41eab20941cbe5dc6bd5_0.geojson', {method: 'GET'}); //Haetaan lämpötilat apista.
    if (!vastaus.ok) throw new Error('jokin meni pieleen');
    const matkustajat = await vastaus.json();
    tiedotKartalle(matkustajat);
  } catch (error) {
    console.log(error);
  }
}

function tiedotKartalle(matkustajat) { //Sijoitetaan apista kerätyt tiedot kartalle ja puretaan apista lisätietoa ponnahdusikkunaan, mikäli kohdetta klikataan.
  console.log(matkustajat);

  for (let i = 0; i < 2000; i++) {

    let nimi = matkustajat.features[i].properties.Nimi;
    let nousijam = matkustajat.features[i].properties.Nousijamaa;
    let lon = matkustajat.features[i].geometry.coordinates[0];
    let lat = matkustajat.features[i].geometry.coordinates[1];

    L.marker([lat, lon]).addTo(map)
    .bindPopup(`<p>Pysäkki: ${nimi}, ${nousijam} matkustajaa</p>`);
  }
}


piirraKartta();
haeMatkustajat();