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
			var jsonObject = JSON.parse(request.responseText);
			
			var timeContainer = document.getElementById("time");
			timeContainer.innerHTML = jsonObject.time;
			
			var dateContainer = document.getElementById("date");
			dateContainer.innerHTML = jsonObject.date;
		}
	};

	request.send();
}