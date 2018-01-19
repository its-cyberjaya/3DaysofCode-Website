$(document).ready(function(){
	$("html, body").animate({ scrollTop: 0 });
	$('.wrapper').css('opacity',1);
	$(".slice-content-wrapper").css("opacity",'1');

	if($(window).width() >= 1024){
		// $("#left").css("width","40%");
		// $("#right").css("width","59.5%");
	}

});

function RoundOffUpper(x,range){
	if(x > range){
		x = range;
	}
	return x;
}

function RoundOffLower(x,range){
	if(x < range){
		x = range;
	}
	return x;
}

function CalculateDownShow(obj,range){
	var scrollTop = $(window).scrollTop(),
	      height = obj.outerHeight(),
	      offset = height / 2,
	      calc = (1 - (scrollTop - offset + range) / range);
    return calc;
}

function CalculateUpShow(obj,range){
	var scrollTop = $(window).scrollTop(),
	      height = obj.outerHeight(),
	      offset = height / 2,
	      calc = (scrollTop - offset + range) / range;
    return calc;
}

$(window).scroll(function(){
	if($(window).outerWidth() > 768){

		var scrollY = $(window).scrollTop();

		// header effect
		var headerscroll = CalculateDownShow($('#header'),200);
		var val = RoundOffUpper(headerscroll,1);
		$("#header").css("opacity",val);
		
		// Info 2 tittle effect
		var info1scroll = CalculateDownShow($('#info-1'),$(window).outerHeight()/2);
		var val = -1 * RoundOffLower(150- (info1scroll * -150),0);
		$("#info-1 .info-title").css("margin-left",val);

		// Info 1 content effect - 1
		var info1scroll = CalculateDownShow($('#info-1'),$(window).outerHeight()/2);
		var val = RoundOffLower(150 - (info1scroll * -150),0);
		$("#info-1 .info-content ul .odd").css("margin-left",val);
		// Info 1 content effect - 2
		var val = RoundOffLower(200 - (info1scroll * -200),0);
		$("#info-1 .info-content ul .even").css("margin-left",val);

		// Info 2 title effect
		var info2scroll = CalculateDownShow($('#info-2'),1400);
		var val = RoundOffLower(300 - (info2scroll * -300),0);
		$("#info-2 .info-title").css("margin-left",val);
		// Info 2 content effect
		var val = RoundOffLower(150 - (info2scroll * -150),0);
		$("#info-2 .info-content").css("margin-right",val);
		// Info 2 
		var val = RoundOffLower(200 - (info2scroll * -200),0);
		$("#info-2 .info-button .btn-info-details").css("margin-left",val);

		var val = RoundOffLower(200 - (info2scroll * -200),0);
		$("#info-2 .info-button .btn-info-register").css("margin-right",val);

		// Info 2 prize effect
		if(scrollY >= 1300){
			var element = $('#info-2 .info-prize ul li');
			for (var i = element.length - 1; i >= 0; i--) {
				element[i].style.transform = "scale(1.0)";
			}
		}
		if(scrollY >= 1600){
			var element = $('#info-3 .info-badge .info-badge-item');
			for (var i = element.length - 1; i >= 0; i--) {
				element[i].style.transform = "scale(1.0)";
			}
		}
		// Info 4 prize effect
		if(scrollY >= 2300){
			var element = $('#info-4 .info-prize ul li');
			for (var i = element.length - 1; i >= 0; i--) {
				element[i].style.transform = "scale(1.0)";
			}
		}

		// Info 4 content effect
		var info4scroll = CalculateDownShow($('#info-4'),2400);
		var val = RoundOffLower(250 - (info4scroll * -250),0);
		$("#info-4 .info-content").css("margin-top",val);

	}
	else{
		$("#info-1 .info-title").css("margin-left",0);
		$("#info-1 .info-content ul .odd").css("margin-left",0);
		$("#info-1 .info-content ul .even").css("margin-left",0);
		$("#info-2 .info-title").css("margin-left",0);
		$("#info-2 .info-content").css("margin-right",0);
		$("#info-2 .info-button .btn-info-details").css("margin-left",10);
		$("#info-2 .info-button .btn-info-register").css("margin-right",10);
		$("#info-4 .info-content").css("margin-top",0);
	}
});