$(document).ready(function(){

	//Chart JS 
	options= {
		scaleShowLabels : false,
		scaleLineWidth : 1,
		scaleLineColor : "transparent",
		scaleShowGridLines : false,
		bezierCurve : false,
		pointDot : false,
		animationEasing: 'easeOutQuart',
		datasetStrokeWidth : 1,
		scaleOverride : false,
		onAnimationComplete : function(){
			$("ul[data-liffect] li").each(function (i) {
				$(this).attr("style", "-webkit-animation-delay:" + i * 100 + "ms;"
					+ "-moz-animation-delay:" + i * 100 + "ms;"
					+ "-o-animation-delay:" + i * 100 + "ms;"
					+ "animation-delay:" + i * 100 + "ms;");
				if (i == $("ul[data-liffect] li").size() -1) {
					$("ul[data-liffect]").addClass("play")
				}
			});
		}
	}

	var lineChartData = {
		labels : ["","","","","","",""],
		datasets : [
		{
			fillColor : "#003c5e",
			strokeColor : "#003c5e",
			pointColor : "#003c5e",
			pointStrokeColor : "#003c5e",
			data : [0,100,40,50,30,60,0]
		}
		]

	}

	var myLine = new Chart(document.getElementById("line-canvas").getContext("2d")).Line(lineChartData,options);

});

