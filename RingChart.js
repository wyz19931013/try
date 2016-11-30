
require("./ComSegmentCompStyle.css");
var RingChart = React.createClass({
    getInitialState: function () {
        return {
        	percent:0.6       	
        }
    },
    componentWillMount:function(){
    },
    componentDidMount: function() {
    	this.createRingChart();
    },
    componentWillUpdate :function(){
    },
    componentDidUpdate:function(){
    },
    componentWillUnmount :function(){
    },
    componentWillReceiveProps:function(nextProps) {
    },
    //设置Echart内容
    createRingChart: function (){
        var canvas = document.getElementById('ringChartCanvas');
        var context =  canvas.getContext('2d');   
        var x = canvas.clientWidth/2;
        var y = canvas.clientHeight/2;
        var radius = 40;
        var percent = 0.8;
        var ringColor = "#46ab42";
        var backColor = "black";
        this.drawRingChartHandler(context,x,y,radius,percent,ringColor,backColor);
    },
    //x,y 圆心坐标,radius 半径,percent 百分比,ringColor 圆环颜色, backColor 中心颜色；

    drawRingChartHandler : function(context,x,y,radius,percent,ringColor,backColor) {
        var value = parseInt(this.state.percent*28);
        for(var i=0;i<28;i++){
            context.beginPath();  
            if(i<=21){
        		context.arc(x,y, radius, 1.5*Math.PI-i*Math.PI/28*2, 1.5*Math.PI-(i*2+1)*Math.PI/56*2, true);  // 
            }else if(i>21){
                context.arc(x,y, radius, 2*Math.PI-(i-21)*Math.PI/28*2, 2*Math.PI-((i-21)*2+1)*Math.PI/56*2, true);  // 
            }
            context.strokeStyle = value>i?ringColor:"#4c4c4f"; 
            context.lineWidth=8;
            context.stroke();  
            context.closePath();
        }
        //填充圆环底色
        context.beginPath();  
        context.moveTo(x, y); 
        context.arc(x, y, radius - (context.lineWidth/2), 0, Math.PI * 2, true);  
        context.closePath();
        context.fillStyle = backColor;  
        context.fill(); 
        //圆环内部填充文字
        this.fillRingText(context,x,y);
    },
    fillRingText : function(context,x,y){
        context.font = "bold 16px Arial";  
        context.fillStyle = "white";  
        context.fontSize = "18px";  
        context.textAlign = 'center';  
        context.textBaseline = 'middle';  
     //   context.moveTo(40, 50);  
        context.fillText("第一行", 45, 30); 
        context.font = "bold 16px Arial";  
        context.fillStyle = "red";  
        context.fontSize = "19px";  
        context.fillText("第二行", 45, 50);    
    },
    changePercent:function(){
    	debugger;
    	alert(1)
    	this.setState({
    		percent:0.95
    	});
    },
render: function() {
        return (
             <div className="ringChartCanvasDiv" onClick={this.changePercent}>
                <canvas id="ringChartCanvas" width="90%" height="100%">
                </canvas>
            </div>

        );
    }
});
module.exports = RingChart;
