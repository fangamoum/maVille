import '../styles/main.css';

import { CityAPI , meteoville} from './api';   

document.addEventListener('DOMContentLoaded' , async()=>{
    const api = new CityAPI();
    const meteo = new meteoville();
    const input = document.querySelector('#cityInput');
    const button = document.querySelector('#searchBtn');
    const resulDiv = document.querySelector('.result');
    const meteoDetails = document.querySelector('.meteo-details');

   
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
            const [lon , lat] = features[0].geometry.coordinates;

            const meteoData = await meteo.getMeteo (lat , lon);
            if(!meteoData){
                meteoDetails.innerHTML = "<p style='color:red;'>Impossible de récupérer les données météorologiques.</p>";
                return;
            }

            resulDiv.innerHTML =`
            <h2>Information sur la ville :</h2>
            <p><strong>ville : </strong> ${villeaff.city}</p>
            <p><strong>Code postal : </strong> ${villeaff.postcode}</p>
            <p><strong>Région : </strong> ${villeaff.context}</p>
            <p><strong>Latitude : </strong> ${lat} ${lon}</p>
           
        `;
            meteoDetails.innerHTML = `
            <h2>Données météorologiques :</h2>
            <p><strong>Description : </strong> ${meteoData.weather[0].description}</p>
            <p><strong>Température : </strong> ${meteoData.main.temp} °C</p>
            <p><strong>Humidité : </strong> ${meteoData.main.humidity} %</p>
            <p><strong>Vitesse du vent : </strong> ${meteoData.wind.speed} m/s</p>
        
            `;
        }
        catch(error){
            console.error("Erreur :", error);
            resulDiv.innerHTML = "<p style='color:red;'>Une erreur est survenue lors de la recherche.</p>";
            
        }
    });
});