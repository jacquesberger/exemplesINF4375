Express.js
==========

Express.js est le framework HTTP utilisé avec Node.js dans le projet de session.
Le moteur de templating Jade sera utilisé avec Express.js.

Objectifs
---------

* Créer une application web offrant des services en HTML, JSON, XML.
* Invoquer un service web externe.
* Utiliser Express.js et Jade.

Exercices
---------

Ce [fichier](data-server.js) contient un serveur HTTP qui retourne des données
en JSON à l'adresse `http://localhost:8888/`. Lancez Node.js en spécifiant ce
fichier en paramètre pour lancer le service. Il s'agit de votre source de
données pour les exercices de l'atelier. Chaque service que vous allez
programmer devra invoquer cette application à l'aide d'une requête HTTP.

1. À l'aide de `express-generator`, créez un projet Express.js utilisant Jade
   (templating par défaut).

2. Créez un service qui retourne les données en format JSON.

3. Créez un service qui retourne les données en format HTML. Utilisez Jade pour
   générer le HTML.

4. Créez un service qui retourne les données en format XML. Utilisez Jade pour
   générer le XML.
