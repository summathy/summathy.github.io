function parseXML(path){
	var contentString = "Ups, something went wrong :(";

	/* read file */
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", path, false);
	xmlhttp.send();
	if(xmlhttp.status == 200){
		contentString = xmlhttp.responseText;
	}

	/* parse XML */

	/* write content */
	var contentDiv = document.getElementById("content");
	contentDiv.innerHTML += contentString;
}