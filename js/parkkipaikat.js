'use strict';

var container = L.DomUtil.get('map'); //Katsotaan, onko kartta alusettu ja mikäli on, poistetaan alustus/alustetaan uudestaan.
if(container != null){
  container._leaflet_id = null;
}

var map = L.map('map').setView([60.189, 24.966], 11); //Luodaan kartta


function piirraKartta() {
  //let data = [];
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
          throw new Error('Parkkipaikat haettu'); // Ei saatu > error
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
      });
}
/*
function haeParkkipaikat(sivu) {
  fetch('https://pubapi.parkkiopas.fi/public/v1/parking_area/?page=' +
      sivu). //Haetaan parkkipaikat APIsta
      then(function(vastaus) {
        if (vastaus.ok) {  // Tarkastetaan, saatiinko vastaus
          return vastaus.json(); //Saatiin > edetään
        } else {
          throw new Error('Parkkipaikat haettu'); // Ei saatu > error
        }
      }).
      then(function(tulos) {
        const parkkipaikat = tulos.features;
        L.geoJSON(parkkipaikat, {  // Parkkipaikat kartalle
          onEachFeature: tallennaTiedot, // Ajetaan kaikille tietueille, klikkauksella näytetään tiedot
        });
        sivu++; // seuraava sivu
        haeParkkipaikat(sivu); //rekursio
      }).
      catch(function(error) {
        console.log(error.message); //tulostetaan error-viesti konsoliin
      });
}

function tallennaTiedot(feture){
  data.push(feture);
}

function lisaaVaratut(){
  for (let i = 0; i < data.length ; i++) {
    let id = data[i].feature.properties.id;
    fetch(
        'https://pubapi.parkkiopas.fi/public/v1/parking_area_statistics/{' + id +
        '}/'). //Haetaan varatut parkkipaikat APIsta
        then(function(vastaus) {
          return vastaus.json();        // Muutetaan ladattu tekstimuotoinen data JSON-olioiksi
        }).
        then(function(tulos) {
          lisaaRes(tulos, i)
        }).
        catch(function(error) {       // Jos tapahtuu virhe,
          console.log(error);           // kirjoitetaan virhe konsoliin.
        });
  }
}

function lisaaRes(json, i){
  console.log(json);
  data[i].feature.properties.current_parking_count = json.feature.properties.current_parking_count;
}
*/
function naytaTiedot(feature, layer) {
  //let varattu = haeVaratut(feature.id);
  layer.bindPopup(
      `<p>Paikkoja: ${feature.properties.capacity_estimate}</p><p>${feature.properties.current_parking_count}</p>`); //Näytetään pop-up ikkuna, jossa alueen kapasiteetti ja varatut paikat
}
/*
function haeVaratut(id) {
  console.log(id);
  let varatut;
  fetch(
      'https://pubapi.parkkiopas.fi/public/v1/parking_area_statistics/{' + id +
      '}/'). //Haetaan varatut parkkipaikat APIsta
      then(function(vastaus) {
        return vastaus.json();        // Muutetaan ladattu tekstimuotoinen data JSON-olioiksi
      }).
      then(function(tulos) {
        varatut = tulos.current_parking_count;
        console.log('Varatut ' + varatut);
      }).
      catch(function(error) {       // Jos tapahtuu virhe,
        console.log(error);           // kirjoitetaan virhe konsoliin.
      });
  return varatut;
}


function parkkipaikatKartalle(){
  L.geoJSON(data, {  // Parkkipaikat kartalle
    onEachFeature: naytaTiedot, // Ajetaan kaikille tietueille, klikkauksella näytetään tiedot
  }.addTo(map));
}
*/

piirraKartta();
// käynnistetään parkkipaikkojen haku, aloitetaan sivulta 1
haeParkkipaikat(1);
//lisaaVaratut();
//console.log(data);
//parkkipaikatKartalle();
