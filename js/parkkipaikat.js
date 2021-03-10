'use strict';

var container = L.DomUtil.get('map'); //Katsotaan, onko kartta alustettu ja mikäli on, poistetaan alustus/alustetaan uudestaan.
if(container != null){
  container._leaflet_id = null;  //var käytössä, sillä let heittää errorin.
}

var map = L.map('map').setView([60.169, 24.946], 14); //Luodaan kartta

function piirraKartta() {   //Piirretään kartta näytölle
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
}

function haeParkkipaikat(sivu) {
  fetch('https://pubapi.parkkiopas.fi/public/v1/parking_area/?page=' +
      sivu). //Haetaan parkkipaikat APIsta
      then(function(vastaus) {
        if (vastaus.ok) {  // Tarkastetaan, saatiinko vastaus
          return vastaus.json(); //Saatiin > edetään
        } else {
          throw new Error('Parkkipaikat haettu');
        }
      }).
      then(function(tulos) {
        const parkkipaikat = tulos.features;
        L.geoJSON(parkkipaikat, {  // Parkkipaikat kartalle
          onEachFeature: naytaTiedot, // Ajetaan kaikille tietueille, klikkauksella näytetään tiedot
        }).addTo(map);
        sivu++; // seuraava sivu
        haeParkkipaikat(sivu); //rekursio
      }).
      catch(function(error) {
        console.log(error.message); //tulostetaan error-viesti konsoliin
      });                           //Haun lopuksi tulee aina error viimeisen sivun jälkeen, kun seuraavaa sivua ei löydy
}

function naytaTiedot(feature, layer) {  //Klikkauksella näytetään pop-up ikkuna, jossa alueen kapasiteetti
  layer.bindPopup(
      `<p>Paikkoja: ${feature.properties.capacity_estimate}</p>`);
}

piirraKartta();
haeParkkipaikat(1);       // käynnistetään parkkipaikkojen haku, aloitetaan sivulta 1
