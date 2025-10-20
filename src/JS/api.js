const meteoapikey = 'b3a3ea78f66f086298c744fe01e00e40';

export class CityAPI {
    constructor(){
        this.baseURL = 'https://api-adresse.data.gouv.fr';
    }
    async searchCity(cityName){
        try{
            const response = await fetch(`${this.baseURL}/search/?q=${cityName}&type=municipality`);
            if(!response.ok){
                throw new Error('Erreur lors de la requete');
            }
            const data = await response.json();
            return data.features;

        }
        catch(error){
            console.error(error);
            return[];
        }
    }  
}
 export class meteoville {
        constructor(){
            this.baseURL = 'https://api.openweathermap.org/data/2.5/weather';
            this.meteoapikey = meteoapikey;
        }

        async getMeteo(lat , lon){
            try{
                const response = await fetch (`${this.baseURL}?lat=${lat}&lon=${lon}&appid=${this.meteoapikey}&units=metric&lang=fr`);
                if(!response.ok){
                    throw new Error('Erreur lors de la requete meteo');
                }
                const data = await response.json();
                return data;
            }
            catch(error){
                console.error(error);
                return null;
            }
        }
    }