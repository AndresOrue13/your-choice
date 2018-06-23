
var menuStatus = false;

function ocultarmenu(){ 	

	var menu = document.getElementById('app_menu');
	


	if(menuStatus){
		menu.setAttribute('style','display: none');
	console.log('none');
				}

	else{
		menu.setAttribute('style','display: block');
		console.log('block');
		}

				menuStatus=!menuStatus;
}