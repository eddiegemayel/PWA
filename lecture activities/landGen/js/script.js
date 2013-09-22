
var world=worldGen();

var wps ="";

for(outer=0; outer<10; outer++){
	wps="";
	for(inner=0; inner<10; inner++){
		wps += world[outer][inner];
		wps+= tabGen(world[outer][inner].length );
		
	
	}

	console.log(wps);


}


//character initial position
var xpos=0;
var ypos=0;
var end=true;

//movement through arrays
do{
	var movement= prompt("Move your character which direction (N, S, E, W, or Q)");
	if(movement =="N" || movement == "n"){
		ypos--;
	}
	if(movement == "S" || movement=="s"){
		ypos++;
	}
	if(movement == "E" || movement == "e"){
		xpos++;
	}
	if(movement == "W" || movement == "w"){
		xpos--;
	}
	if(movement == "Q" || movement =="q"){
		end = false;
	}
	
	if(xpos==-1){
		xpos = 9;
	}
	if(ypos==-1){
		ypos =9;
	}
	if(xpos==10){
		xpos= 0;
	}
	if(ypos==10){
		ypos = 0;
	}
	
	//console.log("X: "+xpos+" | Y: "+ypos);
	console.log(world[ypos][xpos]);
}
while(end);
