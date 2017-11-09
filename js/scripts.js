$(function(){
	console.log('DOM loaded');
});

/*
$('span').each(function(index, element){
		if (index % 2 == 0) {
			$(element).css('color' , 'red');
		}
});
*/

$('p').each(function(index, element){
	$(element).append('<button class = "btn" data-tmp="' + index + '">Click me</button>');  
});

$('button').click(function(){
	alert($(this).attr("data-tmp"));
});

//nowe działanie :> 

$('span').each(function(index, element){
	$(element).attr('id' , "special" + index);		// ten sam efekt osiągnąłem dając funkcji jedynie paramter index, a $(element) zastępując $(this) :> 
});

var ignored = [$("#special1"), $("#special2")];          
console.log(ignored[0]);

var allSpan = $('span');
console.log(allSpan);


var diff = $(allSpan).not(ignored).get();
console.log(diff);

$(diff).css('color' , 'red');

