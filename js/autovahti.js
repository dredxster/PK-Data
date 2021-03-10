'use strict';

var container = L.DomUtil.get('map');  //Katsotaan, onko kartta alusettu ja mikäli on, poistetaan alustus/alustetaan uudestaan.
if(container != null){
  container._leaflet_id = null;  //var käytössä, sillä let heittää errorin.
}

var map = L.map('map').setView([60.169, 24.946], 14);  //Luodaan kartta.

function piirraKartta() {  //Piirretään kartta selaimeen.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
}

//Tehdään autojen id:stä oma taulukkonsa, jonka avulla yksittäisten autojen koordinaattien hakeminen on helpompaa.
var autot = [];
autot[0] = '29495';
autot[1] = '30378';
autot[2] = '30383';
autot[3] = '30384';
autot[4] = '30385';
autot[5] = '30387';
autot[6] = '30388';
autot[7] = '30414';
autot[8] = '30425';
autot[9] = '30426';
autot[10] = '30428';
autot[11] = '30429';
autot[12] = '35602';
autot[13] = '35603';
autot[14] = '40352';
autot[15] = '43394';
autot[16] = '30438';
autot[17] = '30439';
autot[18] = '29564';
autot[19] = '30379';
autot[20] = '30381';
autot[21] = '30382';
autot[22] = '30392';
autot[23] = '30401';
autot[24] = '30433';
autot[25] = '30434';
autot[26] = '30436';
autot[27] = '41276';
autot[28] = '43645';
autot[29] = '44574';

async function haeAutot() {  //Haetaan apista tiedot autoista taulukon avulla.
  for (let i = 0; i < 30; i++) {  //For loop käytössä monen auton id:tä hakiessa.
    try{
      const vastaus = await fetch('http://gis.vantaa.fi/rest/telemetry/v1/vehicle/' + autot[i], {method: 'GET'});  //Auto haetaan id:n perusteella.
      if (!vastaus.ok) throw new Error('jokin meni pieleen');
      autot[i] = await vastaus.json();
    } catch (error) {
      console.log(error);
    }
  }
  tiedotKartalle(autot);
}


function tiedotKartalle(autot) { //Sijoitetaan apista kerätyt tiedot kartalle ja puretaan apista lisätietoa ponnahdusikkunaan, mikäli kohdetta klikataan.
  console.log(autot);

  for (let i = 0; i < 30; i++) {  //Jostain syystä kartalle ilmestyy vain noin 12 autoa.

    let status = autot[i].features[0].properties.status;
    let lon = autot[i].features[0].geometry.coordinates[0][0][0];
    let lat = autot[i].features[0].geometry.coordinates[0][0][1];

    L.marker([lat, lon]).addTo(map)
    .bindPopup(`<p>Auton status: ${status}</p>`);
  }
}

piirraKartta();
haeAutot();