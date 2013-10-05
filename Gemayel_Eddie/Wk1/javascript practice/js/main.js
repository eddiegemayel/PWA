// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
  	var newArray = [100, 70, 50, 65, 89, 50];	//array with values
	var total = 0;								//the var that holds the total of all the values


	newArray.forEach(function(e){
		total+=e;					//everytime the loop runs, it adds each value from the array together

	});

	var average = total / newArray.length ;		//divides the total by the length of the array to find the average

	console.log(average);

    //--------------------------------------------------------|
    console.log("2. concat first and last name");

        function fullName(firstName, lastName){	
        	var name = firstName +" "+ lastName ;		//function takes the last and first name, concats them together with a space in between as well
        	return name;
        }

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------|
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function";

        function wordCount(list){
        	var count = list.split(" ");		//function splits the list by spaces
        	
        	return count.length;			//this value will tell us how many words are in the sentence
        }

    console.log(wordCount(ipsum));

    //--------------------------------------------------------|
    console.log("4. sentence char count");

        function charCount(words){
        	var result = words.length;		//calculates how many characters are in the function by its length
        	return result;
        }

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

        function vowelsInWord(test){
        	var vowelCount = 0;	//this variable holds the number of vowels in the word
        	
        	for(i=0; i<test.length; i++){
        		
        		var f = test.charAt(i);	//loop through each letter in the string
        		
        		if(f == "a" || f == "e" || f == "i" || f == "o" || f == "u"){
        			vowelCount++;	//if the current letter is a vowel, add 1 to the counter
        		}
        		else{
        		
        		}
        	}
        	return vowelCount;			//return the counter
        }

    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        var newArray1 = [];
		var newArray2 = [];		//these arrays will hold the even and odd numbers

		function findNum(array, f, t){
	
	
	
			for(i=0; i<array.length; i++){
				var c = array[i];		//loops through each number in the given array
				var b = c % 2;			//var b represents the remainder of the number divided by 2
		
		
		
				if(b==0){			//if the remainder is 0, it's an even number
					f[i]=c;			//add to the even number array
				}
				else{
					t[i] =c;		//if the remainder is not 0, its an odd number.
				}					//add it to the odd number array
			}
			
			return [f, t];			//return both arrays to the console log
	
		}

    console.log(findNum([31,22,4,67,83,6,5,4], newArray1, newArray2));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();