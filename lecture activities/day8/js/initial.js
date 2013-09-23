//lecture8
//day8 rubric calculator


//Variants 10%  **
//Calculation 5% **
//Conditionals 35% **
//Validation 10%
//Comments 10%
//Github delievery 10%
//Files 10%
//completeness 5%
//investment 5%
//100, 75, 30, 0


var variants = parseInt(prompt("Enter the percent score for Variants section (1-100): ")) ;
var calculation = parseInt(prompt("Enter the percent score for Calculation section (1-100): "));
var conditionals = parseInt(prompt("Enter the percent score for Conditionals section (1-100): "));
var validation = parseInt(prompt("Enter the percent score for validation section (1-100): "));
var comments = parseInt(prompt("Enter the percent score for Comments section (1-100): "));
var github = parseInt(prompt("Enter the percent score for Github section (1-100): "));
var files = parseInt(prompt("Enter the percent score for Files section (1-100): "));
var completeness = parseInt(prompt("Enter percent the score for Completeness section (1-100): "));
var investment = parseInt(prompt("Enter the percent score for Investment section (1-100): "));



function calcGrade (){


	var variantsTotal = variants * .10;
	var calculationTotal = calculation *.05;
	var conditionalsTotal = conditionals * .35;





	var validationTotal = validation * .10;
	var commentsTotal = comments * .10;
	var githubTotal = github * .10;
	var filesTotal = files * .10;
	var completenessTotal = completeness * .05;
	var investmentTotal = investment * .05;
	var gradeTotal = variantsTotal + calculationTotal + conditionalsTotal + validationTotal + commentsTotal + githubTotal + filesTotal + completenessTotal+ investmentTotal;
	
	if(variantsTotal ==0){
		return gradeTotal = "You failed."
	}
	if(calculationTotal ==0){
		return gradeTotal = "You failed."
	}
	if(conditionalsTotal ==0){
		return conditionalsTotal = "You failed."
	}
	
	
	
	return gradeTotal+"%";

}
console.log(calcGrade());
