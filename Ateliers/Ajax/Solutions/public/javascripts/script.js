// Copyright 2016 Jacques Berger.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function fetch() {
  var id = document.getElementById('choix-dossier').value;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/dossiers/" + id, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var object = JSON.parse(xhr.responseText);
        document.getElementById('champ-prenom').innerHTML = "Prénom : " + object.prenom;
        document.getElementById('champ-nom').innerHTML = "Nom : " + object.nom;
        document.getElementById('champ-date-naissance').innerHTML = "Date de naissance : " + object.date_naissance;
        document.getElementById('champ-age').innerHTML = "Âge : " + object.age;
        document.getElementById('champ-grades').innerHTML = "Grades : " + object.grades.join(", ");
      } else {
        alert('Erreur');
      }
    }
  };
  xhr.send();
}

function post() {
  var prenom = document.getElementById('champ-prenom').value;
  var nom = document.getElementById('champ-nom').value;
  var grade = document.getElementById('champ-grade').value;
  var age = parseInt(document.getElementById('champ-age').value, 10);
  var annee = parseInt(document.getElementById('champ-annee').value, 10);
  var mois = parseInt(document.getElementById('champ-mois').value, 10);
  var jour = parseInt(document.getElementById('champ-jour').value, 10);
  var object = {
    date_naissance: (new Date(annee, mois - 1, jour)).toISOString(),
    prenom: prenom,
    nom: nom,
    age: age,
    grades: [grade]
  };
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/dossiers", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        alert('Dossier enregistré');
      } else {
        alert('Erreur');
      }
    }
  };
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(object));
}
