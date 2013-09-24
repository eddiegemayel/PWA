//lecture8 Practice

var fruitArray = [] ;
fruitArray[0] ="Apple";
fruitArray[1] ="Pear";
fruitArray[2] ="Oranges";
fruitArray[3] ="Grape";
fruitArray[4]="Banana";


var fruitArray2 =["Apple", "Pear", "Oranges", "Grape" ,"Bananas"];

//console.log(fruitArray);
//console.log(fruitArray2);





var newArray=[];
var name ;

	for(j=0 ; j<6; j++){				
									
	
		newArray[j]=[]; 					
	
		for(i=0;i<6;i++){
			
			name = newArray[j][i] = (j*i)+ " ";
			newArray[j][i]=name;
	
		}
	
	}

//newArray[5][5]="6 ";

var fruitiness ='';


for(outer=0;outer<6;outer++){
	
    fruitiness ='';
    
    
    for(inner=0;inner<6;inner++){
        fruitiness+=newArray[outer][inner];
        
        
    }

    console.log(fruitiness);

}




console.log(newArray);



