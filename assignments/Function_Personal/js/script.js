//Eddie Gemayel , Sunday Sept 14. Conditionals "wacky"


//Average of your exams

var grade1=prompt("Please enter your grade on the first exam: ");		
//variable collects first test grade from user

var grade2=prompt("Please enter your grade on the second exam: ");
//variable collects second test grade

var grade3=prompt("Please enter your grade on the third exam: ");
//variable collects third test grade


var avg=(grade1 * grade2 * grade3) /3;
//variable takes all three grades and divides by three to find average

(avg>60) ? console.log("You are pretty smart son! Your average is "+ avg) : console.log("You are a fool! Your average is only "+avg);

//if the average is more than 60, the page will display you passed. if you had less than a 60 average, then you fail. Console displays the average to the user.

 
 
 
 
 
 
  