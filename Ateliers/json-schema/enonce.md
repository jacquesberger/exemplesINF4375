json-schema
===========

Cet atelier introduit la validation de documents Json à l'aide de json-schema.
Vous serez amené à construire une petite application web avec des services
d'ajout et de modification de ressource. Il sera nécessaire de valider les
données du client.

Objectifs
---------

* Valider les données provenant du client.
* Manipuler json-schema.

Exercices
---------

1. Créez une application Express.js avec un service de création d'une fiche
   de personne. Les données reçues du client doivent être :
   * un nom;
   * un prénom;
   * un âge;
   * une date de naissance;
   * une liste de grades universitaires (des strings).

   Tous les champs sont obligatoires.

   Le service doit valider les données du client à l'aide de json-schema.

2. Créez un service de modification d'une fiche de personne. Tous les champs
   sont optionnels et le client n'envoie que les valeurs qui ont changé. Le
   service doit valider les données du client à l'aide de json-schema.
