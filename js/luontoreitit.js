'use strict';

var container = L.DomUtil.get('map'); //Katsotaan, onko kartta alusettu ja mikäli on, poistetaan alustus/alustetaan uudestaan.
if(container != null){
  container._leaflet_id = null;  //var käytössä, sillä let heittää errorin.
}

var map = L.map('map').setView([60.194392, 24.977437], 12);

function piirraKartta() {  //Piirretään kartta selaimeen.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
}

var haku = 'https://citynature.eu/api/wp/v2/places?cityid=5';  //haun osoite.

function haeSpotit() {  //Haetaan apista tiedot reiteistä.
  fetch(haku)
  .then(function(vastaus){
    return vastaus.json();
  }).then(function(json) {
    console.log(json);
    paikatKartalle(json);
  })

  function paikatKartalle(json) {  //Sijoitetaan apista kerätyt tiedot kartalle ja puretaan apista lisätietoa ponnahdusikkunaan, mikäli kohdetta klikataan.
    console.log(json[0]);
    console.log(json[0].title);
    console.log(json[0].points[0].locationPoint.lat);
    console.log(json[0].points[0].locationPoint.lng);

    for (let i = 0; i < json.length; i++) {
      let lat = json[i].points[0].locationPoint.lat;
      let lng = json[i].points[0].locationPoint.lng;
      let title = json[i].title;

      L.marker([lat, lng]).addTo(map)
      .bindPopup(title);
    }
  }
}

piirraKartta();
haeSpotit();