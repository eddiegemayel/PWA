

//array inception

var newArray =[];
newArray[0]=["pear", "apple", "grape"];
newArray[1]=["bat", "cat", "rat", "frog"];
newArray[2]=["Joe", "sae", "Apollo", "Starbuck", "Malik"];

console.log(newArray[0][2] );
newArray[3]=[];
newArray[3] [0]="Monkey";

console.log(newArray[3] [0]);

var loopingArray=[];

//for(i=0;				//initial variable and value
//	i<=10;				//when to stop
//	i++){				//what to do to the initial value after loop is finished
	
	//stuff to be done
//	console.log(i);
//	loopingArray[i]=[];
//	loopingArray[i][0]="pos " + i;
//	console.log(loopingArray [i] [0]);
	
//}



//Shuttle launch
var practiceArray=[];

for(i=10; i>=0; i--){

	//console.log(i);
	practiceArray[i]=[];
	practiceArray[i][0]="Countdown: " + i;
	console.log(practiceArray [i] [0]);
	
	

}
console.log("Blastoff!");


// 10x10 map. Land, ocean, jungle, desert, etc. use Math.random();

console.log(Math.random());

var food;
var jam =.35;
var japa =.7;
var burger =.8;
var duck=1;


var randomValue = Math.random();

if(randomValue <jam){ foodType ="Jamicain"}
else if (randomValue<japa){foodTpe="Japan"}
else if(randomValue < burger){foodType="Burger"}
else{foodType="Duck"}

console.log(foodType);
console.log(randomValue);




