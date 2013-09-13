console.log("started");

var testGrade = 50;
var letterGrade = "";

if (testGrade>90){
	letterGrade = "A";
}
else if (testGrade > 80){
	letterGrade = "B";
}
else if(testGrade > 70){
	letterGrade = "C";
}
else if(testGrade > 60){
	letterGrade = "D";
}
else{
	letterGrade="F";
}

console.log("A " + testGrade + " is a " + letterGrade);