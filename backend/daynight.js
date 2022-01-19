function toggleDayNight(){
	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
	if (prefersDarkScheme.matches) {
		document.body.classList.toggle('light-theme');
		for(let element of document.getElementsByClassName('post')){
			console.log(element);
			element.classlist.toggle('light-theme');
		}
		// TODO sections
	} else {
		document.body.classList.toggle('dark-theme');
		for(let element of document.getElementsByClassName('post')){
			element.classList.toggle('dark-theme');
		}
		// TODO sections
	}
}