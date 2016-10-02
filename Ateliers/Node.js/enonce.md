Node.js
=======

L'aspect le plus complexe à maîtriser avec Node.js c'est l'asynchronisme des
opérations d'entrée-sortie avec les callbacks. Il s'agit du point le plus
important de l'atelier. Il faut donc être particulièrement attentif sur ce
point.

Objectifs
---------

* Se familiariser avec Node.js.
* Manipuler des callbacks et des appels asynchrones.
* Créer un package.json.

Exercices
---------

Pour ces exercices, nous n'utiliserez que les modules `fs`, `http` et `mongodb`.
Le module `mongodb` n'est pas disponible dans l'API de Node.js, il faut donc
utiliser `npm` pour l'obtenir. À cet effet, utilisez un `package.json` pour
gérer vos dépendances. La commande `npm init` sert à générer un package.json.

1. Faites un script qui lit les données de ce [fichier texte](fichiertexte.txt) et qui stocke
   les données dans une collection MongoDB.
2. Faites un serveur HTTP qui affichera le contenu de la collection MongoDB dans
   un tableau HTML envoyé au fureteur.
