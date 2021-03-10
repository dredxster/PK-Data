'use strict';

var container = L.DomUtil.get('map'); //Katsotaan, onko kartta alusettu ja mikäli on, poistetaan alustus/alustetaan uudestaan.
if(container != null){
  container._leaflet_id = null;  //var käytössä, sillä let heittää errorin.
}

var map = L.map('map').setView([60.169, 24.946], 14); //Luodaan kartta.

function piirraKartta() {  //Piirretään kartta selaimeen.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
}

async function haeAsemat() {  //Haetaan apista tiedot asemista.
  try{
    const vastaus = await fetch('https://opendata.arcgis.com/datasets/b2aa879ce93c4068ac63b64d71f24947_0.geojson', {method: 'GET'});
    if (!vastaus.ok) throw new Error('jokin meni pieleen');
    const pysakit = await vastaus.json();
    tiedotKartalle(pysakit);
  } catch (error) {
    console.log(error);
  }
}

function tiedotKartalle(pysakit) {  //Sijoitetaan apista kerätyt tiedot kartalle ja puretaan apista lisätietoa ponnahdusikkunaan, mikäli kohdetta klikataan.
  console.log(pysakit.features);

  for (let i = 0; i < 2000; i++) {  //2000 kertaa suorituskyvyn takia.

    let nimi1 = pysakit.features[i].properties.NIMI1;
    let nimi2 = pysakit.features[i].properties.NIMI2;
    let lon = pysakit.features[i].geometry.coordinates[0];
    let lat = pysakit.features[i].geometry.coordinates[1];

    L.marker([lat, lon]).addTo(map)
        .bindPopup(`<p>Pysäkki: ${nimi1}, ${nimi2}</p>`);
  }
}

piirraKartta();
haeAsemat();