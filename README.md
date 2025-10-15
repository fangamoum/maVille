# nom de l'application : maVille

## Étudiant
- Nom :FANGAMOU
- Prénom :Mamady
- Mail universitaire :mamady.fangamou@etu.univ-amu.fr

## Description du projet
maVille est une application web qui permet à l'utilisateur de rechercher une ville en France et d'obtenir des informations principales ainsi que la météo en temps réel :

L’application repose sur deux requêtes API dépendantes :
1) Recherche d’une ville via  **api-adresse.data.gouv.fr**
L’utilisateur saisit le nom d’une ville, l’application récupère son nom exact, son code postal, sa région et ses coordonnées GPS.

2) Affichage de la météo via OpenWeatherMap
 À partir des coordonnées GPS obtenues, une requête affiche la météo actuelle (température, description,humidité , vitesse du vent).


## Technologies utilisées
- HTML / CSS / JavaScript
- Webpack (gestion des modules, CSS, images)
- APIs : **api-adresse.data.gouv.fr**, **OpenWeatherMap**

## Arborescence des fichiers
maVille/
│
├── dist/
│   ├── bundle.js
│   └── index.html
│
├── src/
│   ├── assets/
│   ├── JS/
│   │   ├── api.js
│   │   └── index.js
│   ├── styles/
│   │   └── main.css
│   └── index.html
│
├── package.json
├── package-lock.json
├── webpack.config.js
└── Readme.md

## installation et execution 
1) cloner le depot 
git clone  https://github.com/fangamoum/maVille.git
cd maVille

2) Installer les dependances
   ## npm install 

3) Créer la version de production
  ## npm run build
  les fichier serons generés dans le dossier dist/.

4) Lancer le serveur de développement
  ## npm run start
L’application s’ouvrira automatiquement dans votre navigateur 
http://localhost:8080


## Diagramme de classe
Le diagramme ci-dessous illustre la structure orientée objet de l’application **maVille**, incluant les relations entre les classes principales (Ville, Meteo).
[Diagramme de classes](./src/assets/20251015_043430.jpg)