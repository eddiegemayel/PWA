//lecture 1

var totalSeconds = parseInt(prompt("Enter total seconds: "));
var min = Math.floor(totalSeconds / 60);
var sec = totalSeconds % 60;

//if(min<10 && sec<10){
//	console.log("0"+ min +" : 0" + sec);
//}
//else if(min>9 && sec<10){
//	console.log(min +" : 0" + sec);
//}
//else if(min>9 && sec>9){
//	console.log(min +" : "+ sec);
//}
//else if (min<10 && sec>9){
//	console.log("0"+ min +" : "+ sec);
//}

var str = (min < 10 ? "0" : "") + min + ":" + (sec <10 ? "0" : "") + sec;

console.log("Time : " + str);


var grades =[97,100,89,69,40];

grades.splice(1,1);

console.log(grades);

//console.log("0"+ min +" : 0" + sec);
//console.log(min);
//console.log(sec);
