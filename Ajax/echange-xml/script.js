var request = null;

function createRequestObject() {
	try {
		request = new XMLHttpRequest();
	} catch (err) {
		alert("Error creating XMLHttpRequest object!");
		request = null;
	}
}

function reload() {
	if (request === null) {
		createRequestObject();
	}

	var url = "time.php";
	request.open("GET", url, true);

	request.onreadystatechange = function() {
		if (request.readyState === 4) {
			var xmlDom = request.responseXML;
			
			var timeContainer = document.getElementById("time");
			timeContainer.innerHTML = xmlDom.getElementsByTagName("time")[0].textContent;
			
			var dateContainer = document.getElementById("date");
			dateContainer.innerHTML = xmlDom.getElementsByTagName("date")[0].textContent;
		}
	};

	request.send();
}