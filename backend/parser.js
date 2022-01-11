function parseXML(path){
	var contentString = "Ups, something went wrong :(";

	/* read file */
	try{
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", path, false);
		xmlhttp.send();
		if(xmlhttp.status == 200){
			contentString = xmlhttp.responseText;
		}
	}catch(e){

	}

	/* parse XML */

	/* write content */
	var contentDiv = document.getElementById("content");
	contentDiv.innerHTML += contentString;
}