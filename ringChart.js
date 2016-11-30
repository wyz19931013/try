
$("#canvas").onload = function(){
	alert(1);
};
window.onload=function(){
	
	var canvas = document.getElementById('canvas');
	var context =  canvas.getContext('2d');
	
	var pWidth = canvas.clientWidth/2;
	var pHeight = canvas.clientHeight/2;
	//context，弧度，颜色
	drawRingChartHandler(context,pWidth,pHeight,0.99,"#46ab42");
	canvas.addEventListener('click', function(e){
		  alert(2222);
	}, false);  
}
 
 //传入的参数 
function drawRingChartHandler(context,pWidth,pHeight,pValue,pColor){
	debugger;
	var value = parseInt(pValue*28);
	for(var i=0;i<28;i++){
		context.beginPath();  
		if(i<=21){
			context.arc(pWidth,pHeight, 40, 1.5*Math.PI-i*Math.PI/28*2, 1.5*Math.PI-(i*2+1)*Math.PI/56*2, true);  // 
		}else if(i>21){
			context.arc(pWidth,pHeight, 40, 2*Math.PI-(i-21)*Math.PI/28*2, 2*Math.PI-((i-21)*2+1)*Math.PI/56*2, true);  // 
		}
		context.strokeStyle = value>i?pColor:"#4c4c4f"; 
		context.lineWidth=8;
		context.stroke();  
		context.closePath();
	}
	context.beginPath();  
	context.moveTo(40, 50); 
	context.arc(44, 50, 36, 0, Math.PI * 2, true);  
	context.closePath();
	context.fillStyle = 'black';  
	context.fill(); 
	
	context.font = "bold 16px Arial";  
	context.fillStyle = "white";  
	context.fontSize = "18px";  
	context.textAlign = 'center';  
	context.textBaseline = 'middle';  
//	context.moveTo(40, 50);  
//	context.fillText("35aaaaaa", 30, 50);  
	context.fillText("第一行", 45, 30); 
	context.font = "bold 16px Arial";  
	context.fillStyle = "red";  
	context.fontSize = "19px";  
	context.fillText("第二行", 45, 50);  	
}
