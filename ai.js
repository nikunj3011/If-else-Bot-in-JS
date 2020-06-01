var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
today = mm + '/' + dd + '/' + yyyy;
function start(invar, outvar){
	if (invar == ""){
		outvar("Please Write Something..");
	}
	
	if (invar == "Hii"){
		outvar("Itarasai");
	}

	if (invar == "How are you?"){
		outvar("Daijobu");
	}

	if (invar == "Who are you?"){
		outvar("Nikunj maybe");
	}
	
	if (invar == "Date"){
		outvar(today);
	}
	
	if (invar == "Time"){
		outvar(time);
	}
	
	
	if (invar == "Who am I?"){
		outvar("You");
	}
	
	if (invar == "How am I?"){
		outvar("Great maybe :D");
	}
	
	if (invar == "Bye"){
		outvar("See u on the bright side");
	}

}
