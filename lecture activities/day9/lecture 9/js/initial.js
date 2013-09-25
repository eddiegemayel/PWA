//lecture9 activity
var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");
var age = parseInt(prompt("Enter your age: "));

function info(name1, name2, age){
	
	return "Your name is "+ name1 +" " +name2 +" , and you are " + age+" years old.";

}

console.log(info(firstName, lastName, age));