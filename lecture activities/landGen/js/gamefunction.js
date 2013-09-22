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





function worldGen(world){


	var world=[];
	for(j=0 ; j<10; j++){				//remove rowoflandvariable
									//var rowOfLand="";
	
		world[j]=[]; 					//for every row, make a column go across.
	
		for(i=0;i<10;i++){
		
			world[j][i]=landSelection();
			//console.log(world[j][i]);
	
		}
	
	}
	return world;
}

