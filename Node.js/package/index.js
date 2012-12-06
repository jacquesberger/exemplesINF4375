var fs = require("fs");
var xmldom = require("xmldom");
var xpath = require("xpath");

fs.readFile("document.xml", function(err, data) {
  if (err) {
    console.log("Error reading XML document");
  } else {
    var domRoot = new xmldom.DOMParser().parseFromString(data.toString());
    var count = xpath.select("count(//document[@type = 'book'])", domRoot);
    console.log("There is ", count, " books in document.xml");
  }
});