function toggleDayNight(){
	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
	if (prefersDarkScheme.matches) {
		document.body.classList.toggle('light-theme');
		//document.getElementById('content').classList.toggle('dark-theme');
		/*for(let element of document.getElementsByClassName('post')){
			element.classlist.toggle('light-theme');
		}*/
	} else {
		document.body.classList.toggle('dark-theme');
		//document.getElementById('content').classList.toggle('dark-theme');
		/*for(let element of document.getElementsByClassName('post')){
			element.toggle('dark-theme');
		}*/
	}
}