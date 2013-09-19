//Eddie Gemayel , Wednesday Sept 18. Functions Personal


//Super Mario High Scores

var score1 = prompt("Enter the first Score you got on Super Mario Bros: ");

var score2 = prompt("Enter the second Score you got on Super Mario Bros: ");

var score3 = prompt("Enter the third Score you got on Super Mario Bros: ");

//The variables above all do the same thing: Collect info from the user about their three scores



//function named calcScore with no parameters

function calcScore (){

	var avgScore ;				//variable to hold the user's average score
	var result = "";			//variable to hold the result, which will be a String
	
	
	avgScore = (score1* score2* score3) / 3;	//Math to find the average
	

	if(avgScore > 10000){
		result = "Wow! You are a pro! With a score of "+ avgScore + "!";
		
		//this If statement decides that if your average score is about 10,000 points, then the result will say you are awesome
	
	}
	else if(avgScore == 10000){
		result = "Right at 10,000? Interesting Score.";
		
		//this Else If statement declares that if you somehow score an even 10,000 points, you are very lucky
	
	}
	else{
		result = "You fail! Your score was only "+ avgScore + "!";
		
		//this else statement says if you score less than 10,000 , sorry, you suck!
	}
	
	
	
	return result;			//telling the computer to return us the result
}
 console.log(calcScore());
 
 //console log the function! simple as that
 
 
  