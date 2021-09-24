exemplesINF4375 1%
===============

Les différents exemples présentés dans le cours INF4375.


JSON
----

[library.json](JSON/library.json) Modélisation d'une liste de documents.

[timesheet.json](JSON/timesheet.json) Modélisation d'une feuille de temps.

[json-schema](json-schema/) Validation d'un document JSON avec json-schema.


XML
---

[document-narratif.xml](XML/document-narratif.xml) Un document narratif (sans
schéma) représentant une liste de documents.

[document-structurel.xml](XML/document-structurel.xml) Un document structurel
(relié à un schéma) représentant une liste de publications musicales.

[document-schema.xsd](XML/document-schema.xsd) Le schéma du document structurel.

[DTD](DTD/) Validation d'un document XML avec DTD.

[XSD](XSD/) Validation d'un document XML avec XSD. Ce répertoire contient les
trois formes de design possibles avec un document XSD.

[Relax NG](RELAX-NG/) Validation d'un document XML avec RELAX NG.


Node.js
-------

[hello-world.js](Node.js/hello-world.js) Un Hello World! avec Node.js.

[console-log-avec-conditions.js](Node.js/console-log-avec-conditions.js) Un
script contenant des console.log avec diverses conditions et manipulations de
variables.

[lecture-fichier-texte](Node.js/lecture-fichier-texte/) Le répertoire contient un
mauvais exemple d'utilisation d'un callback lors de la lecture d'un fichier
texte, ainsi qu'un bon exemple pour le même traitement. Il contient également un
exemple d'un serveur HTTP qui retourne le contenu du fichier texte en format
HTML.

[hello-server-text.js](Node.js/hello-server-text.js) Un serveur HTTP qui
retourne un Hello World! en texte.

[hello-server-html.js](Node.js/hello-server-html.js) Un serveur HTTP qui
retourne un Hello World! en HTML.

[module-avec-requete-http](Node.js/module-avec-requete-http/) Exemple
d'utilisation d'un module. Le serveur fait une lecture du site jberger.org et
retourne le nombre de publications en format HTML.

[package.json](Node.js/package.json/) Exemple d'utilisation d'un document
package.json. Le script utilise les packages xmldom et xpath pour faire la
lecture d'un document XML et afficher le nombre de livres contenus dans le
document XML.

[lecture-fichier-xml](Node.js/lecture-fichier-xml/) Exemple de lecture d'un
fichier XML avec xmldom.

[MongoDB](MongoDB/exemples/) Plusieurs exemples d'utilisation de MongoDB avec
Node.js.

[formulaire](Node.js/formulaire/) Exemple d'envoi d'un formulaire à une
application Node.js à l'aide d'un POST.

[iconv](Node.js/iconv-iso-8859-1/) Conversion d'un fichier encodé en latin1 vers
utf-8.


Express.js
----------

[Routing](Node.js/Express.js/routing-parametres/) Une application Express.js qui
illustre comment faire du routing avec les URLs.

[Validation](Node.js/Express.js/validation/) Le backend reçoit des données du
frontend et y applique une validation avec json-schema.

[Services](Node.js/Express.js/services-pug-stylus/) Services REST simples
retournant des données en HTML, XML et JSON. Utilise Pug et Stylus.

[formulaire](Node.js/Express.js/formulaire/) Application Express.js pour
illustrer les redirections et la navigation d'un site avec un formulaire.

[MongoDB](Node.js/Express.js/mongodb-express) Application Express.js utilisant
MongoDB pour illustrer comment utiliser un pool de connexions à la base de
données.

[RAML](Node.js/Express.js/raml) Application Express.js utilisant RAML pour la
documentation des services. L'intégration à Express.js est faite avec raml2html.
