MongoDB
=======

Cet atelier vise à rendre l'étudiant apte à utiliser MongoDB. La première partie
portera sur l'installation et la mise en place de mongoDB, incluant l'exécution
du serveur mongod et du client mongo. Les exercices de cet atelier doivent être
complétés dans le client mongo à la console.

Objectifs
---------

* Installation de MongoDB.
* Comprendre le fonctionnement de l'architecture client-serveur utilisée par
  MongoDB.
* Utiliser les opérations CRUD de MongoDB.

Exercices
---------

Utilisez une base de données nommée dossiers qui contiendra de l'information sur
des dossiers d'employés pour une firme de recrutement. Vous avez besoin de
stocker de l'information sur les candidats et sur leur parcours professionnel.

1. Créez une collection nommée candidats.

2. Ajoutez un dossier de candidature. Pour chaque dossier, on stocke :
  * le nom;
  * le prénom;
  * une liste de numéros de téléphone;
  * une liste d'emplois antérieurs (pour chaque emploi, on spécifie le nom de
    l'entreprise, une date d'embauche et une date de cessation d'emploi - mettez
    les dates sous format de strings).

3. Ajoutez 3 autres dossiers de candidature avec la même modélisation qu'au #2,
   à l'exception des dates qui doivent maintenant être des objets Javascript
   Date (ex. new Date(2016, 3, 1) donne le 1er avril 2016 - le mois est
   0-based). Qu'observez-vous de différent avec les dates dans MongoDB?

4. Supprimez le premier dossier que vous avez créé.

5. Ajouter une propriété `nombre_tentatives` avec la valeur 0 à tous les dossiers.

6. Changez le nom d'un candidat.

7. Ajoutez un emploi à un candidat.

8. Videz la collection au complet.

9. Supprimez la base de données.

10. Replacez des données dans MongoDB et expérimentez avec les commandes
    mongodump et mongorestore.

Solutions
---------

* [Exercices #1 à #9](Solutions.mongo.js)
