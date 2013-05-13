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

exports.getBookReferences = function(callback) {
  fs.readFile("document.xml", function(err, data) {
    if (err) {
      callback([]);
    } else {
      var result = [];
      var domRoot = new xmldom.DOMParser().parseFromString(data.toString());
      var documentList = domRoot.getElementsByTagName("document");
      for (var i = 0; i < documentList.length; i++) {
        var currentDocument = documentList[i];
        if (currentDocument.getAttribute("type") === "book") {
          var object = {};
          object.title = currentDocument.getElementsByTagName("title")[0].textContent;
          object.year = parseInt(currentDocument.getElementsByTagName("year")[0].textContent, 10);
          result.push(object);
        }
      }
      callback(result);
    }
  });
};
