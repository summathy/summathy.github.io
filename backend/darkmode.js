const enableDarkmode = () => {
	document.body.classList.add("darkmode");
	localStorage.setItem("darkmode", "enabled");
}

const disableDarkmode = () => {
	document.body.classList.remove("darkmode");
	localStorage.setItem("darkmode", "disabled");
}

const toggleDarkmode = () => {
	darkmode = localStorage.getItem("darkmode");

	if(darkmode !== "enabled"){
		enableDarkmode();
	}else{
		disableDarkmode();
	}
}


let darkmode = localStorage.getItem("darkmode");

if(darkmode === "enabled"){
	enableDarkmode();
}else if(darkmode === "disabled"){
	disableDarkmode();
}else{
	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
	if(prefersDarkScheme){
		enableDarkmode();
	}else{
		disableDarkmode();
	}
}

/*const darkmodeToggle = document.getElementById('dark-mode-toggle');
darkmodeToggle.addEventListener("click", () => {
	
});*/