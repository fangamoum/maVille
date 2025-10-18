import '../styles/main.css';
import logo from '../assets/logo.png' ;

import { CityAPI , cityDemography , meteoville} from './api'; 

document.addEventListener('DOMContentLoaded' , async()=>{
    const api = new CityAPI();
    const demographie = new cityDemography();
    const meteo = new meteoville();

    const input = document.querySelector('#cityInput');
    const button = document.querySelector('#searchBtn');
    const resulDiv = document.querySelector('.result');
    const meteoDetails = document.querySelector('.meteo-details');

    const header = document.getElementById('header');
    const logoImg = document.createElement('img');
    
    logoImg.src = logo;
    logoImg.alt = 'Logo maVille';
    logoImg.style.height = '40px';
    logoImg.style.marginRight = '10px';
    header.prepend(logoImg);


    button.addEventListener('click', async()=>{
        const ville = input.value.trim();

        if(!ville){
           resulDiv.innerHTML = "<p style='color:red;'>Veuillez entrer un nom de ville.</p>";
           return;
        }

        try{
            const features = await api.searchCity(ville);

            if(features.length === 0){
                resulDiv.innerHTML = `<p style='color:red;'>Aucune ville trouvée pour "${ville}".</p>`;
                return;
            }

            const villeaff = features[0].properties;
            const demographyData = await demographie.getDemography(villeaff.city);
            const [lon , lat] = features[0].geometry.coordinates;

            const meteoData = await meteo.getMeteo (lat , lon);
            if(!meteoData){
                meteoDetails.innerHTML = "<p style='color:red;'>Impossible de récupérer les données météorologiques.</p>";
                return;
            }

            resulDiv.innerHTML = `
            <div class="ville-info" style="background:white; padding:1rem; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1)">
                <h2>Information sur la ville :</h2>
                <p><strong>ville : </strong> ${villeaff.city}</p>
                <p><strong>Code postal : </strong> ${villeaff.postcode}</p>
                <p><strong>Région : </strong> ${villeaff.context}</p>
                <p><strong>Latitude : </strong> ${lat}</p>
                <p><strong>Longitude : </strong>${lon}</p>

                ${demographyData ? `
                <p><strong>Population : </strong> ${demographyData[0].population}</p>

                ` : '<p>Données démographiques non disponibles</p>'}
            </div>
        `;
           meteoDetails.innerHTML = `
           <div class="meteo-overview" style="background:white; padding:1rem; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1)">
              <h2>Données Méteologiques :</h2>
            <h2>${villeaff.city}</h2>
            <div class="temperature">${Math.round(meteoData.main.temp)}°C</div>
            <p>${meteoData.weather[0].description}</p>

            <div class="meteo-cards">
                <div class="meteo-card">
                   <p><strong>Humidité</strong></p>
                   <p>${meteoData.main.humidity} %</p>
            </div>
            <div class="meteo-card">
                  <p><strong>Vent</strong></p>
                  <p>${(meteoData.wind.speed * 3.6).toFixed(1)} km/h</p>
            </div>
            <div class="meteo-card">
                 <p><strong>Température min</strong></p>
                 <p>${meteoData.main.temp_min} °C</p>
            </div>
            <div class="meteo-card">
                 <p><strong>Température max</strong></p>
                 <p>${meteoData.main.temp_max} °C</p>
            </div>

            <div class="meteo-card">
                 <p><strong>Pression</strong></p>
                 <p>${meteoData.main.pressure} hPa</p>
            </div>
            <div class="meteo-card
        </div>
     `;

        }
        catch(error){
            console.error("Erreur :", error);
            resulDiv.innerHTML = "<p style='color:red;'>Une erreur est survenue lors de la recherche.</p>";
            
        }
    });
});