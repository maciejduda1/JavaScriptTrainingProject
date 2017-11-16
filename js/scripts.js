$(function(){
	//this code will execute after the DOM is loaded
});

//Zmienne
var carouselChangeTimer;
var carouselList = $("#carousel ul");

// Listenery:

$("#leftArrow").click(function(){
	changeSlideAnimation('leftDirection');
	carouselChangeTimer = intervalSetup();
});

$("#rightArrow").click(function(){		
	changeSlideAnimation('rightDirection');
	carouselChangeTimer = intervalSetup();
});
// Funkcje:

function changeSlideAnimation(animationDirection){
	if (animationDirection == 'rightDirection'){
		carouselList.animate({'marginLeft':-400}, 500, moveSlide);
	}
	else if (animationDirection == 'leftDirection'){
		moveOtherSide()
		carouselList.animate({'marginLeft':0}, 500);
	}
	else{
		carouselList.animate({'marginLeft':-400}, 2000, moveSlide);	
	}
}
//w prawą:
function moveSlide(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
}

function intervalSetup(){
	clearInterval(carouselChangeTimer);
	return setInterval(changeSlideAnimation, 6000);
}

// w lewą:
function moveOtherSide(){
var firstItem = carouselList.find("li:first");
var lastItem = carouselList.find("li:last");
firstItem.before(lastItem);
carouselList.css({marginLeft: -400});
}

// Karuzela:
carouselChangeTimer = intervalSetup();




// function moveSlide(animationDirection){
//	var firstItem = carouselList.find("li:first");
//	var lastItem = carouselList.find("li:last");
//	if (animationDirection == 'right'){
//		lastItem.after(firstItem);
//		carouselList.css({marginLeft:0});
//	}
//	else if (animationDirection == 'left'){
//		firstItem.before(lastItem);
//		carouselList.css({marginLeft: -400});
//	}
//}
// To czemuś nie działa... 