Express.js et MongoDB
=====================

Cet atelier permet de construire un backend REST complet avec Express.js et
MongoDB.

Objectifs
---------

* Concevoir un backend avec Express.js.
* Initier les étudiants aux services REST.
* N'utiliser qu'une seule instance de connexion avec MongoDB.

Exercices
---------

1. Créer un projet Express.js.

2. Mettre en place une connexion unique à la base de données, comme présenté
   dans l'exemple suivant : [https://github.com/jacquesberger/exemplesINF4375/tree/master/Node.js/Express.js/mongodb-express](https://github.com/jacquesberger/exemplesINF4375/tree/master/Node.js/Express.js/mongodb-express).

3. Créer un service POST à l'URL `/albums` pour créer un album. Le service doit
   retourner 201 et l'album tel que créé dans la BD en cas de succès.

4. Créer un service GET à l'URL `/albums` pour obtenir la liste des albums.

5. Créer un service DELETE à l'URL `/albums/:id`, où :id est l'ObjectId de
   l'album à supprimer. Le service doit retourner 404 si l'id n'existe pas.

6. Créer un service PUT à l'URL `/albums/:id`, où :id est l'ObjectId de l'album
   à supprimer. Le service doit retourner 404 si l'id n'existe pas.

Solutions
---------

* [Exercices #1 à #6](Solutions/)
