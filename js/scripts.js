$(function(){
	//this code will execute after the DOM is loaded
});
var carouselChangeTimer;
var carouselList = $("#carousel ul");

function intervalSetup(changeTimerNow){
	if (changeTimerNow == 'Now'){
		clearInterval(carouselChangeTimer);
	return	setInterval(changeSlide, 8000);
	}
	else {
	return setInterval(changeSlide, 8000);
	}
}


function changeSlide(){
	carouselList.animate({'marginLeft':-400}, 3000, moveFirstSlide);
}

function changeSlideOtherDirection(){
	carouselList.animate({'marginLeft': 0}, 3000, moveLastSlide);
}

function moveFirstSlide(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
}

function moveLastSlide(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	firstItem.before(lastItem);
	carouselList.css({marginLeft:-400});
}

$("#rightArrow").click(function(){							
	changeSlide();
	carouselChangeTimer = intervalSetup('Now');
});

$("#leftArrow").click(function(){
	changeSlideOtherDirection();
	carouselChangeTimer = intervalSetup('Now');
});




// Karuzela:
carouselChangeTimer = intervalSetup();

