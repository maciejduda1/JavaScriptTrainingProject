var add = document.getElementById('addElem');
var list = document.getElementById('list');

add.addEventListener('click', function(){	
	var element = document.createElement('li');
	var number = document.getElementsByTagName('li').length;
	if (number % 2 === 0){
		element.style.color = 'red';
	}
	element.innerHTML = 'item ' + number;
	list.appendChild(element);
});

