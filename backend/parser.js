function parseXML(path){
	var contentString = "";

	/* read file */
	var location = window.location.href;
	var dirpath = location.substring(0,location.lastIndexOf("/")+1);
	
	try{
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", path, false);
		xmlhttp.send();
		contentString = xmlhttp.responseText;
	}catch(e){
		contentString = "<h2>Error</h2> Ups, something went wrong :(";
	}

	/* parse XML */

	parser = new DOMParser();
	xmlDoc = parser.parseFromString(contentString, "text/xml");
	console.log(xmlDoc.documentElement);
	contentString = parseDOM(xmlDoc.documentElement);

	// TODO read and change title
	// TODO add paragraphs
	// TODO parse diagrams
	// TODO generate TOC

	/* write content */
	var contentDiv = document.getElementById("content");
	contentDiv.innerHTML += contentString;

	MathJax.typeset();
}

function parseDOM(node){
	var type = node.nodeName;
	var prefix = '';
	var infix = '';
	var postfix = '';

	if(type == "post"){
		prefix = "<div class='post'>";
		postfix = "</div>";
	}else if(type == "section"){
		prefix = "<h2>";
		postfix = "</h2>";
	}else if(type == "#text"){
		if(node.nodeValue != null){
			infix = parseText(node.nodeValue);
		}
	}else{
		prefix = "<" + type;
		for(let attribute of node.attributes){
			prefix += " " + attribute.name + "=" + attribute.value;
		}
		prefix += ">";

		postfix = "</" + type + ">";
	}

	for(let child of node.childNodes){
		infix += parseDOM(child);
	}

	return prefix + infix + postfix;
}

function parseText(text){
	var result = "";
	var paragraphs = text.split("\n\n");
	if(paragraphs.length > 1){
		for(let paragraph of paragraphs){
			result += "<p>" + paragraph + "</p>\n";
		}	
	}else{
		result = text;
	}
	return result;
}