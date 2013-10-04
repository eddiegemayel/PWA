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
  	var newArray = [100, 70, 50, 65, 89, 50];
	var total = 0;


	newArray.forEach(function(e){
		total+=e;

	});

	var average = total / newArray.length ;

	console.log(average);

    //--------------------------------------------------------|
    console.log("2. concat first and last name");

        function fullName(firstName, lastName){
        	var name = firstName +" "+ lastName ;
        	return name;
        }

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------|
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function";

        function wordCount(list){
        	var count = list.split(" ");
        	
        	return count.length;
        }

    console.log(wordCount(ipsum));

    //--------------------------------------------------------|
    console.log("4. sentence char count");

        function charCount(words){
        	var result = words.length;
        	return result;
        }

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

        function vowel(test){
        	var vowelCount = 0;
        	
        	
        }

    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        //PUT FUNCTION HERE

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();