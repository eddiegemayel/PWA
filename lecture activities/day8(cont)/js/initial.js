//lecture8 Practice

var fruitArray = [] ;
fruitArray[0] = "Apple";
fruitArray[1] = "Pear";
fruitArray[2] = "Oranges";
fruitArray[3] = "Grape";
fruitArray[4] = "Banana";


var fruitArray2 =["Apple" , "Pear" , "Oranges" , "Grape" , "Bananas"];

//console.log(fruitArray);
//console.log(fruitArray2);


var newArray=[];
var name ;

	for(j=0 ; j<6; j++){				
									
	
		newArray[j]=[]; 	//makes second array				
	
		for(i=0;i<6;i++){
			
			newArray[j][i]=[];	//makes third dimension of array
			
			for(l=0; l<6; l++){
			
				newArray[j][i][l]=[];	//makes fourth dimension
				
				for(k=0; k<6; k++){
				
					name = newArray[j][i][l][k] = (j*i*l*k)+ " ";	//makes multiply table
					
					newArray[j][i][l][k]=name;	//applies table to the array
				}
				
			}
			
			
	
		}
	
	}

//newArray[5][5]="6 ";

var fruitiness ='';


for(outer=0;outer<6;outer++){
	
    fruitiness ='';
    
    
    for(inner=0;inner<6;inner++){
    
    	fruitiness ="";
    	
    	for(depth =0; depth<6; depth++){
    	
    	
    		fruitiness ="";
    		
    		
    		for(fourth=0; fourth<6; fourth++){
    		
    			fruitiness+=newArray[outer][inner][depth][fourth]; //displays the array
    		
    		}
    		
    	}
        
        
        
    }

    console.log(fruitiness);

}




console.log(newArray);



