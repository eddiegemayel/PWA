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
									
	
		newArray[j]=[]; 					
	
		for(i=0;i<6;i++){
			
			newArray[j][i]=[];
			
			for(l=0; l<6; l++){
				
				name = newArray[j][i][l] = (j*i*l)+ " ";
				newArray[j][i][l]=name;
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
    		fruitiness+=newArray[outer][inner][depth];
    		
    	}
        
        
        
    }

    console.log(fruitiness);

}




console.log(newArray);



