/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
 (function(){
 	
 	var names = ["Bob", "Frank", "Bill", "Jim", "Flynn", "Jack", "Liz", "Sara", "Mike", "Julia"];

 	var jobs = ["Pilot", "Teacher", "Farmer", "Painter", "Fighter", "Driver","Factory Worker","Programmer", "Designer"];
 	var actions = ["Eating", "Sleeping", "Exercise", "ParaGliding", "Fighting","Walking", "Running", "Jogging", "Lifting"];
 	
 	function Person(){
 		this.name = names[Math.floor(Math.random()*names.length)];
 		this.jobs = jobs[Math.floor(Math.random()*jobs.length)];
 		this.actions =actions[Math.floor(Math.random()*actions.length)];
 		this.row = ~~(Math.random()*3+1);
 		
 	}
 	window.Person=Person;
 
 })();