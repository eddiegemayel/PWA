/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function(){
	var people = [];
	//var counter = 0;

 	var interval = setInterval(runUpdate, 1000);
 	/*clearInterval(interval);*/
 	
 
	var dom = {
		nameRows : [
					{name : document.querySelector("#r1c1")},
					{name : document.querySelector("#r2c1")},
					{name : document.querySelector("#r3c1")}
															],
		jobRows : [
					{job : document.querySelector("#r1c2")},
					{job : document.querySelector("#r2c2")},
					{job : document.querySelector("#r3c2")}
															],	
		
		actionRows : [
					{action : document.querySelector("#r1c3")},
					{action : document.querySelector("#r2c3")},
					{action : document.querySelector("#r3c3")}
															]
	}; 
	
	for(i=0; i<4; i++){
		people[i] = new Person();
				
		//counter++;
	}
	console.log(people);
	
	function populateHTML(){
		for(i=0; i<3; i++){
		
			dom.nameRows[i].name.innerHTML = people[i].name;
			dom.jobRows[i].job.innerHTML = people[i].jobs;
			dom.actionRows[i].action.innerHTML = people[i].actions;
		}	
	}
	
	function runUpdate(){
		
	}
	
 	//window.names = names;
})();