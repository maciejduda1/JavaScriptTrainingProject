$(function(){
	//this code will execute after the DOM is loaded
});

var carouselList = $("#carousel ul");
var intervalSetup = setInterval(changeSlide, 8000);


function changeSlide(){
	carouselList.animate({'marginLeft':-400}, 3000, moveFirstSlide);
}


function moveFirstSlide(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
}

$("#leftArrow").click(function(){
	changeSlide();
	clearInterval(intervalSetup);
	return intervalSetup = setInterval(changeSlide, 8000);
});

$("#rightArrow").click(function(){
	moveLastSlide();
	clearInterval(intervalSetup);
	return intervalSetup = setInterval(changeSlide, 8000);
})

function moveLastSlide(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.before(firstItem);
	carouselList.css({marginLeft:-400});
}