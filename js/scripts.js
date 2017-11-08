$(function(){
	console.log('DOM loaded');
});

$('span').each(function(index, element){
		if (index % 2 == 0) {
			$(element).css('color' , 'red');
		}
});

$('p').each(function(index, element){
	$(element).append('<button class = "btn" data-tmp="' + index + '">Click me</button>');  
});

$('button').click(function(){
	alert($(this).attr("data-tmp"));
});