//Eddie Gemayel , Wednesday Sept 18. Functions Industry


//Finding the Volume of a Cube
//Length * Width * Height

var height = prompt("Enter the height of the cube: ");	//variable holds height of cube
var width = prompt("Enter the width of the cube: ");	//var holds width given by user
var length = prompt("Enter the length of the cube: ");	//var holds length of cube given by user




//function named volume, with	paramaters height width and length

function volume (height, width, length){		

		var calcVolume ;	//variable holds the volume of the cube
		
		calcVolume = (height * width * length);	//calculates the volume
		
		return calcVolume;				//returns the value to us
		

}
 
console.log("The volume is "+ volume(height, width, length));

//console log what the volume of the given cube is
