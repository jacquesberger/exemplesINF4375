var fs = require("fs");

console.log("Avant la lecture du fichier");
fs.readFile("textfile", function(err, data) {
  console.log("Voici les données du fichier : " + data);
});

console.log("Après la lecture du fichier");
