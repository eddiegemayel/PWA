//Data visualization
//Eddie Gemayel
//October 19 2013
(function(){
	var data = [];
	data[0] = 100;
	data[1] = 345;
	data[2] = 250;
	
	//creates canvas tag for the HTML
	var canvas = document.createElement("canvas");
	
	//attaches canvas to the body tag
	document.body.appendChild(canvas);
	
	//console.log(canvas);
	
	//setting up the Canvas
	canvas.width = 400;
	canvas.height = 400;
	
	var ctx = canvas.getContext("2d");
	
	
	var qr = new Image();
	qr.src = "http://www.tvasylum.com/wp-content/uploads/2012/02/small-old-tv1.png";
	qr.addEventListener("load", onLoad);
	function onLoad(){
		ctx.drawImage(qr, 100, 100, 100, 70);
		ctx.beginPath();
		ctx.lineWidth = 4;
		ctx.moveTo(0,0);
		ctx.lineTo(0,400);
		ctx.stroke();
		//vertical line
	
		ctx.beginPath();
		ctx.moveTo(0,400);
		ctx.lineTo(400,400);
		ctx.stroke();
		//horizontal line
	
		ctx.beginPath();
		ctx.strokeStyle = "#000000";
		ctx.rect(50,400-data[0],50,data[0]);
		ctx.stroke();
		//first bar
	
		ctx.beginPath();
		ctx.rect(150, 400 - data[1], 50, data[1]);
		ctx.stroke();
		//second bar
	
		ctx.beginPath();
		ctx.rect(250, 400-data[2], 50, data[2]);
		ctx.stroke();
		//third bar
	
		ctx.font = "20px Helvetica";
		ctx.fillText("Hours Spent on TV", 100, 20);
		//title
	
		ctx.font = "15px Arial";
		ctx.fillText("100", 0, 300);
		ctx.fillText("200", 0, 200);
		ctx.fillText("300", 0, 100);
		ctx.fillText("400", 0, 10);
		//numbers on the y axis
	
		ctx.font = "10px Helvetica";
		ctx.fillText("Month 1", 57, 350);
		ctx.fillText("Month 2", 157, 200);
		ctx.fillText("Month 3", 257, 280);	
		//bar labels	
	}
})();