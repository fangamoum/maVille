# nom de l'application : maVille

## Étudiant
- Nom :FANGAMOU
- Prénom :Mamady
- Mail universitaire :mamady.fangamou@etu.univ-amu.fr

## Description du projet
maVille est une application web qui permet à l'utilisateur de rechercher une ville en France et d'obtenir des informations principales sur la ville ainsi que la météo en temps réel :

L’application repose sur deux requêtes API dépendantes :
1) Recherche d’une ville via  **api-adresse.data.gouv.fr**
L’utilisateur saisit le nom d’une ville, l’application récupère son nom exact, son code postal, sa région et ses coordonnées GPS.

2) Affichage de la météo via OpenWeatherMap
 À partir des coordonnées GPS obtenues, une requête affiche la météo actuelle (température, description,humidité , vitesse du vent).


## Technologies utilisées
- HTML / CSS / JavaScript
- Webpack (gestion des modules, CSS, images)
- APIs : **api-adresse.data.gouv.fr**, **OpenWeatherMap**

## Fonctionnement de l’application
L’utilisateur saisit une ville dans le champ de recherche.

L’application appelle la méthode searchCity() de la classe CityAPI, qui interroge l’API d’adresses pour récupérer les informations de la ville.

Une fois les coordonnées (latitude, longitude) obtenues, elles sont transmises à la méthode getMeteo() de la classe MeteoVille.

Les données météorologiques renvoyées sont ensuite affichées dynamiquement dans l’interface (température, description, humidité, vent etc).

L’interface est simple, responsive et compatible avec les navigateurs récents.

## Arborescence des fichiers
cliquer ici [arborescence](./src/assets/arborescence.jpg) 
pour voir l'aborescence des fichiers.

## installation et execution 
1) cloner le depot 
git clone  https://github.com/fangamoum/maVille.git
cd maVille

2) Installer les dependances
  ## npm install 

3) Lancer le serveur de développement
  ## npm run start
L’application s’ouvrira automatiquement dans votre navigateur 
http://localhost:8080

4) Créer la version de production
  ## npm run build
  les fichier serons generés dans le dossier dist/.

## Diagramme de classe
Le diagramme ci-dessous illustre la structure orientée objet de l’application **maVille**, incluant les relations entre les classes principales (CityAPI, meteoville).

CityAPI : recherche les coordonnées d’une ville
meteoville : récupère et affiche les informations météo correspondantes

[Diagramme de classes](./src/assets/diag_classe.jpg)