//lecture4

//functions

//function myFirstFunction (number1, number2){
//	var productofNum1AndNum2;
//	productofNum1AndNum2 = parseInt(number1)*parseInt(number2);
//	return productofNum1AndNum2;

//}

//console.log(myFirstFunction(5,7));

//function mySecondFunction (number1, number2){
//	return parseInt(number1) + parseInt(number2);

//}

//console.log(mySecondFunction(5,7));

//both work

//land type generator


function landSelection(){
	var init = Math.random()*10;
	var percentChange = Math.floor(init);
	
	
	var woods=0;
	var jungle=1;
	var swamp=2;
	var desert=3;
	var mountains=4;
	var grasslands=5;
	var tundra=6;
	var hills=7;
	var city=8;
	var wasteland=9;
	var returnLandType;
	
	
	if(percentChange ==woods)
	{returnLandType= "Woods"}
	else if (percentChange == jungle)
	{returnLandType = "Jungle"}
	else if(percentChange == swamp)
	{returnLandType = "Swamp"}
	else if(percentChange == desert)
	{returnLandType = "Desert"}
	else if(percentChange == mountains)
	{returnLandType = "Mountains"}
	else if(percentChange == grasslands)
	{returnLandType = "Grasslands"}
	else if(percentChange == tundra)
	{returnLandType = "Tundra"}
	else if(percentChange == hills)
	{returnLandType = "Hills"}
	else if(percentChange == city)
	{returnLandType = "City"}
	else if(percentChange == wasteland)
	{returnLandType = "Wasteland"}
	return returnLandType;
}

function tabGen (len){
	if(len>7){
			return "\t";
			
		}
		else if(len>3){
			return "\t\t";
		}
		else if(len<=3){
			return "\t\t\t";
		}
	
}




var world=[];

for(j=0 ; j<10; j++){				//remove rowoflandvariable
									//var rowOfLand="";
	
	world[j]=[]; 					//for every row, make a column go across.
	
	for(i=0;i<10;i++){
		
		world[j][i]=landSelection();
		//console.log(world[j][i]);
	
	}
	
}

var wps ="";

for(outer=0; outer<10; outer++){
	wps="";
	for(inner=0; inner<10; inner++){
		wps += world[outer][inner];
		wps+= tabGen(world[outer][inner].length );
		
	
	}

	console.log(wps);


}




//////////////////////////////////////////////////////////////////////////////////////////
//step one: sort the world alphabetically so it appears in blocks and chunkss
//
//step two: prompt for [x] and [y] coordinate to see where u r. Prompt then if statement
//
//step three: start process of making it a game
//
//step four: Edges. you can stop player or teleport them to opposite side of the map
//////////////////////////////////////////////////////////////////////////////////////////



 
