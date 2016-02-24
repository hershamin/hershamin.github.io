$( function() {
	$.vegas('slideshow', {
		backgrounds:[
			{ src:'img/background/1.jpg', fade:4000 },
			{ src:'img/background/2.jpg', fade:4000 },
			{ src:'img/background/3.jpg', fade:4000 },
			{ src:'img/background/4.jpg', fade:4000 },
			{ src:'img/background/5.jpg', fade:4000 },
			{ src:'img/background/6.jpg', fade:4000 },
			{ src:'img/background/7.jpg', fade:4000 }
		]
		})('overlay'), {
			src:'img/overlays/01.png'
		};
});
$(document).ready(function() { 
	$(".content").css("display", "none");
	$(".content").fadeIn(2000);
});
