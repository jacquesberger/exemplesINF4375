/*
 * Copyright 2013 Jacques Berger.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var fs = require("fs");
var xmldom = require("xmldom");

fs.readFile("document.xml", function(err, data) {
  if (err) {
    console.log("Error reading XML document");
  } else {
    var domRoot = new xmldom.DOMParser().parseFromString(data.toString());
    var documentList = domRoot.getElementsByTagName("document");
    if (!documentList.length) {
      console.log("La liste ne contient aucun document.");
    } else {
      console.log("La liste contient des documents :");
      for (var i = 0; i < documentList.length; i++) {
        var currentDocument = documentList[i];
        var isBook = currentDocument.getAttribute("type") === "book";
        var title = currentDocument.getElementsByTagName("title")[0].textContent;
        console.log("*", title, isBook ? "[livre]" : "[article]");
      }
    }
  }
});
