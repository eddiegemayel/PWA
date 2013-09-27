//lecture10
var monthSalesData = [];
monthSalesData[0]=100;
monthSalesData[1]=150;
monthSalesData[2]=130;


function rollingAvg(salesArray){
	var returnValue=0;
	for(i=0; i<salesArray.length; i++){
		returnValue+=salesArray[i];
	}
	return returnValue/salesArray.length;
	
}


var avg =(rollingAvg(monthSalesData));


function expectation(rAvg, percentIncrease){
	var expectationOfSales = rAvg * percentIncrease;
	
	var newTotal = expectationOfSales + rAvg;
	
	return newTotal;
	}
	

function performance(current, avg){
	var total = (current-avg)/avg;
	return total*100;
}


function max(array) {
	var largest =0;
	//var array=[];
	
	for(i=0; i< array.length; i++){
		if(largest< array[i]){
			largest=array[i];
		}
	}
	
	return largest;

}



console.log("$"+ avg);
console.log("You are expected to produce $" + expectation(avg, .03) + " next month.");
console.log(performance(110,avg)+"%");
console.log(max(monthSalesData));
