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


async function haeVedet() {  //Haetaan apista tiedot vesistä.
  try{
    const vastaus = await fetch('https://iot.fvh.fi/opendata/uiras/uiras2_v1.json', {method: 'GET'});
    if (!vastaus.ok) throw new Error('jokin meni pieleen');
    const vedet = await vastaus.json();
    vedetKartalle(vedet);
  } catch (error) {
    console.log(error);
  }
}

  function vedetKartalle(vedet) {  //Luodaan uusi, kätevämpi taulukko ja sijoitetaan apista kerätyt tiedot tähän uuteen taulukkoon ja siitä kartalle.

    let vedeta = [];
    vedeta[0] = vedet.sensors["003C62A8"];
    vedeta[1] = vedet.sensors["70B3D57050001AB9"];
    vedeta[2] = vedet.sensors["70B3D57050001AF1"];
    vedeta[3] = vedet.sensors["70B3D57050001BA6"];
    vedeta[4] = vedet.sensors["70B3D57050001BBE"];
    vedeta[5] = vedet.sensors["70B3D57050004C07"];
    vedeta[6] = vedet.sensors["70B3D57050004D86"];
    vedeta[7] = vedet.sensors["70B3D57050004DF8"];
    vedeta[8] = vedet.sensors["70B3D57050004E0E"];
    vedeta[9] = vedet.sensors["70B3D57050004FB9"];
    vedeta[10] = vedet.sensors["70B3D57050004FC2"];
    vedeta[11] = vedet.sensors["70B3D57050004FE1"];
    vedeta[12] = vedet.sensors["70B3D57050004FE6"];
    vedeta[13] = vedet.sensors["70B3D5705000504F"];
    vedeta[14] = vedet.sensors["70B3D5705000516A"];
    vedeta[15] = vedet.sensors["70B3D57050005037"];

    for (let i = 0; i < vedeta.length; i++) {  //Uuden taulukon avulla riittää käyttää yhtä for -loopia.

      let lat = vedeta[i].meta.lat;
      let lon = vedeta[i].meta.lon;
      let name = vedeta[i].meta.name;
      let lampotilav = vedeta[i].data[vedeta[i].data.length-1].temp_water;
      let lampotilaa = vedeta[i].data[vedeta[i].data.length-1].temp_air;

      L.marker([lat, lon]).addTo(map)  //Puretaan apista lisätietoa ponnahdusikkunaan, mikäli kohdetta klikataan.
      .bindPopup(`<p>Asema: ${name},<br> Lämpötila(vesi): ${lampotilav}°C, Lämpötila(ilma): ${lampotilaa}°C</p>`);
    }
}

piirraKartta();
haeVedet();